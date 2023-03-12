import { Button } from '@chakra-ui/react';
import Controls from 'components/Controls/Controls';
import Level from 'components/Level/Level';
import React, { FC, useLayoutEffect } from 'react';
import { useGameStore } from 'store/gameStore';
import { ILevel } from 'types/ILevel';

interface IGameProps {
    levels: ILevel[];
    initialLevel: number;
}

const Game: FC<IGameProps> = ({ levels, initialLevel }) => {
    const setLevelIndex = useGameStore((state) => state.setLevelIndex);
    const setLayoutField = useGameStore((state) => state.setLayoutField);
    const levelIndex = useGameStore((state) => state.levelIndex);
    const isFinish = useGameStore((state) => state.isFinish);
    const setIsFinish = useGameStore((state) => state.setIsFinish);

    useLayoutEffect(() => {
        setLevelIndex(initialLevel);

        // setTimeout(() => {
        //     nextLevel();
        // }, 1000);
    }, []);

    useLayoutEffect(() => {
        try {
            console.log(levels[levelIndex]);
            if (levels[levelIndex] === undefined) {
                return setIsFinish(true);
            }
            setLayoutField(levels[levelIndex].gameField);
        } catch (e) {
            console.log(e);
        }
    }, [levelIndex]);

    const retry = (): void => {
        setLevelIndex(0);
        setIsFinish(false);
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLevel(1);
    //         setLayoutField(levels[levelIndex].gameField);
    //     }, 1000);
    // }, []);

    return (
        <div>
            {!isFinish ? (
                <>
                    {levels[levelIndex] !== undefined && <Level level={levels[levelIndex]} />}
                    {/* <Level level={levels[levelIndex]} /> */}
                    <Controls />
                </>
            ) : (
                <>
                    <h1>You are finish this game!</h1>
                    {/* <button onClick={retry}>Retry</button> */}
                    <Button colorScheme={'messenger'} onClick={retry} autoFocus={true}>
                        Retry
                    </Button>
                </>
            )}
        </div>
    );
};

export default Game;
