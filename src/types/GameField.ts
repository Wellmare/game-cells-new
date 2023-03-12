import { ICell, OnCellEntry } from 'types';

export interface CellWithEntry extends ICell {
    onCellEntry?: OnCellEntry;
}
export type GameField = CellWithEntry[][];
