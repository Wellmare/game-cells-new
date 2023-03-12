import { Empty, Finish, Player, Wall } from 'components/cells';
import React, { FC } from 'react';

import { useGameStore } from 'store/gameStore';
import { CellType, ICoords } from 'types';

const GameField: FC = () => {
    const layoutField = useGameStore((state) => state.layoutField);

    return (
        <div className={'w-6/12 mx-auto'}>
            {layoutField !== null
                ? layoutField.map((row, rowIndex) => {
                      return (
                          <div key={rowIndex} className={'flex justify-center'}>
                              {row.map((cell, cellIndex) => {
                                  const coords: ICoords = { y: rowIndex, x: cellIndex };
                                  const key = `${rowIndex} ${cellIndex} ${cell.type}`;
                                  switch (cell.type) {
                                      case CellType.EMPTY:
                                          return <Empty coords={coords} key={key} />;
                                      case CellType.WALL:
                                          return <Wall coords={coords} key={key} />;
                                      case CellType.PLAYER:
                                          return <Player coords={coords} key={key} />;
                                      case CellType.FINISH:
                                          return <Finish coords={coords} key={key} />;
                                  }
                                  throw new Error('Type of cell not found!!');
                              })}
                          </div>
                      );
                  })
                : 'Поле не найдено'}
        </div>
    );
};

export default GameField;
