import { CellType, Field, ICoords } from 'types';

export const findPlayerCoords = (field: Field): ICoords => {
    let playerCoords: ICoords | null = null;
    field.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell.type === CellType.PLAYER) {
                playerCoords = { x, y };
            }
        });
    });
    if (playerCoords === null) throw new Error('Player coords not found!');
    return playerCoords;
};
