import { classes } from 'lib/classes';
import React, { FC, memo, useEffect } from 'react';

import { useGameStore } from 'store/gameStore';
import { ICoords, OnCellEntry } from 'types';
import { CellType } from 'types/CellType';

import s from './Cell.module.css';

interface ICellProps {
    type: CellType;
    coords: ICoords;
    onCellEntry: OnCellEntry;
    className: string;
}

const Cell: FC<ICellProps> = ({ type, onCellEntry, coords, className }) => {
    const setOnCellEntry = useGameStore((state) => state.setOnCellEntry);
    useEffect(() => {
        setOnCellEntry(onCellEntry, coords);
    }, []);
    return <div className={classes(s.cell, className)}></div>;
};

export default Cell;
