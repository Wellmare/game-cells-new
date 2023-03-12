import Cell from 'components/Cell/Cell';
import React, { FC, useCallback } from 'react';
import { CellType } from 'types';
import { CellProps } from 'types/CellProps';

import s from './Empty.module.css';

type IEmptyProps = CellProps;

const Empty: FC<IEmptyProps> = ({ coords }) => {
    const onCellEntry = useCallback(() => true, []);
    return <Cell type={CellType.EMPTY} onCellEntry={onCellEntry} coords={coords} className={s.empty} />;
};

export default Empty;
