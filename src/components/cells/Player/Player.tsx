import Cell from 'components/Cell/Cell';
import React, { FC, useCallback } from 'react';
import { CellType } from 'types';
import { CellProps } from 'types/CellProps';

import s from './Player.module.css';

type IPlayerProps = CellProps;

const Player: FC<IPlayerProps> = ({ coords }) => {
    const onCellEntry = useCallback(() => {
        console.log('Player move to player');
        return true;
    }, []);
    return <Cell type={CellType.PLAYER} onCellEntry={onCellEntry} coords={coords} className={s.player} />;
};

export default Player;
