import Cell from 'components/Cell/Cell';
import React, { FC, useCallback } from 'react';
import { useGameStore } from 'store/gameStore';
import { CellType } from 'types';
import { CellProps } from 'types/CellProps';

import s from './Finish.module.css';

type IFinishProps = CellProps;

const Finish: FC<IFinishProps> = ({ coords }) => {
    const nextLevel = useGameStore((state) => state.nextLevel);
    const onCellEntry = useCallback(() => {
        nextLevel();
        return false;
    }, []);
    return <Cell coords={coords} onCellEntry={onCellEntry} type={CellType.FINISH} className={s.finish} />;
};

export default Finish;
