import Cell from 'components/Cell/Cell';
import React, { FC, useCallback } from 'react';
import { CellType } from 'types';
import { CellProps } from 'types/CellProps';

import s from './Wall.module.css';

type IWallProps = CellProps;

const Wall: FC<IWallProps> = ({ coords }) => {
    const onCellEntry = useCallback(() => false, []);
    return <Cell type={CellType.WALL} coords={coords} onCellEntry={onCellEntry} className={s.wall} />;
};

export default Wall;
