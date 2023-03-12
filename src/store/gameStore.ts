import { findPlayerCoords, validateCoords } from 'lib/coords';
import { CellType, Field, GameField, ICoords, OnCellEntry, Side } from 'types';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface State {
    layoutField: Field | null;
    gameField: GameField | null;
    levelIndex: number;
    isFinish: boolean;
}

interface Actions {
    setLayoutField: (field: Field) => void;
    setOnCellEntry: (onCellEntry: OnCellEntry, coords: ICoords) => void;
    movePlayer: (coords: ICoords) => void;
    movePlayerOnSide: (side: Side) => void;
    setLevelIndex: (level: number) => void;
    nextLevel: () => void;
    setIsFinish: (isFinish: boolean) => void;
}

export const useGameStore = create(
    devtools(
        immer<State & Actions>((set, get) => ({
            layoutField: null,
            gameField: null,
            levelIndex: 0,
            isFinish: false,
            setLayoutField: (field) =>
                set((state) => {
                    console.log('INIT FIELD');
                    state.layoutField = field;
                    state.gameField = field;
                }),
            movePlayer: (coords) =>
                set((state) => {
                    console.log(`try move to x: ${coords.x} y: ${coords.y}`);
                    if (state.layoutField === null) throw new Error('Try move player before field set');

                    if (state.layoutField[coords.y][coords.x] === undefined)
                        throw new Error('Coords to move do not exist');

                    const playerCoords = findPlayerCoords(state.layoutField);
                    console.log('playerCoords', playerCoords);
                    console.log('coords to move', coords);
                    if (playerCoords.y === coords.y && playerCoords.x === coords.x) return;

                    console.log('MOVE');
                    state.layoutField[playerCoords.y][playerCoords.x].type = CellType.EMPTY;
                    state.layoutField[coords.y][coords.x].type = CellType.PLAYER;
                }),
            movePlayerOnSide: (side) => {
                const field = get().layoutField;
                if (field === null) throw new Error('Try move player before field set');
                const playerCoords = findPlayerCoords(field);
                let newCoords: ICoords | null = null;
                switch (side) {
                    case Side.UP:
                        newCoords = { y: playerCoords.y - 1, x: playerCoords.x };
                        break;
                    case Side.DOWN:
                        newCoords = { y: playerCoords.y + 1, x: playerCoords.x };
                        break;
                    case Side.LEFT:
                        newCoords = { y: playerCoords.y, x: playerCoords.x - 1 };
                        break;
                    case Side.RIGHT:
                        newCoords = { y: playerCoords.y, x: playerCoords.x + 1 };
                        break;
                }
                const movePlayer = get().movePlayer;

                const isValidCords = validateCoords(newCoords, field);
                const isAllowedEntryToCell = get().gameField?.[newCoords.y]?.[newCoords?.x]?.onCellEntry?.() !== false;

                if (isValidCords && isAllowedEntryToCell) {
                    movePlayer(newCoords);
                } else {
                    console.log(`coords x:${newCoords.x}; y:${newCoords.y} dont exist or not allowed to entry`);
                }
            },
            setOnCellEntry: (onCellEntry, coords) =>
                set((state) => {
                    if (state.gameField === null) throw new Error('Game field not initialized');
                    state.gameField[coords.y][coords.x].onCellEntry = onCellEntry;
                }),
            setLevelIndex: (level) =>
                set((state) => {
                    state.levelIndex = level;
                    state.layoutField = null;
                    state.gameField = null;
                }),
            nextLevel: () => {
                get().setLevelIndex(get().levelIndex + 1);
            },
            setIsFinish: (isFinish) =>
                set((state) => {
                    state.isFinish = isFinish;
                }),
        })),
    ),
);
