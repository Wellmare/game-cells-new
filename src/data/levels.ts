import { CellType } from 'types';
import { ILevel } from 'types/ILevel';

export const levels: ILevel[] = [
    {
        name: '1 Level',
        gameField: [
            [{ type: CellType.PLAYER }, { type: CellType.EMPTY }, { type: CellType.EMPTY }],
            [{ type: CellType.WALL }, { type: CellType.EMPTY }, { type: CellType.EMPTY }],
            [{ type: CellType.WALL }, { type: CellType.WALL }, { type: CellType.FINISH }],
        ],
    },
    {
        name: '2 Level',
        gameField: [
            [{ type: CellType.PLAYER }, { type: CellType.EMPTY }, { type: CellType.FINISH }],
            [{ type: CellType.WALL }, { type: CellType.EMPTY }, { type: CellType.EMPTY }],
            [{ type: CellType.WALL }, { type: CellType.WALL }, { type: CellType.EMPTY }],
        ],
    },
];
