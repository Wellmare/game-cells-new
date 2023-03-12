import GameField from 'components/GameField/GameField';
import React, { FC } from 'react';
import { ILevel } from 'types/ILevel';

interface ILevelProps {
    level: ILevel;
}

const Level: FC<ILevelProps> = ({ level }) => {
    return (
        <div>
            <h2 className={'text-center mb-4 font-bold mt-4'} style={{ fontSize: '1.5rem' }}>
                {level.name}
            </h2>
            <GameField />
        </div>
    );
};

export default Level;
