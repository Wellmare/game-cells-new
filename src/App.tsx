import Game from 'components/Game';
import { levels } from 'data/levels';
import React, { FC } from 'react';

const App: FC = () => {
    return (
        <div>
            <Game levels={levels} initialLevel={0} />
        </div>
    );
};

export default App;
