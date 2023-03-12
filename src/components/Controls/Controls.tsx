import { Button } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { useControlsStore } from 'store/controlsStore';
import { useGameStore } from 'store/gameStore';
import { Side } from 'types';

const Controls: FC = () => {
    const movePlayerOnSide = useGameStore((state) => state.movePlayerOnSide);
    const isShowControlsHint = useControlsStore((state) => state.isShowControlsHint);
    const setIsShowControlsHint = useControlsStore((state) => state.setIsShowControlsHint);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            const { key } = event;
            const keys: { [x: string]: Side } = {
                'w': Side.UP,
                'a': Side.LEFT,
                's': Side.DOWN,
                'd': Side.RIGHT,
                'ArrowUp': Side.UP,
                'ArrowLeft': Side.LEFT,
                'ArrowDown': Side.DOWN,
                'ArrowRight': Side.RIGHT,
            };
            if (Object.keys(keys).includes(key)) {
                movePlayerOnSide(keys[key]);
            }
        };

        // add event listener to document
        document.addEventListener('keydown', handleKeyDown);

        // cleanup function
        return () => {
            // remove event listener from document
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {isShowControlsHint && (
                <div className={'flex justify-center items-center mt-3'}>
                    <p className={'text-center mx-4'}>Controls: buttons or WASD or arrows</p>
                    <Button onClick={() => setIsShowControlsHint(false)}>Hide</Button>
                </div>
            )}
            <div className={'flex flex-col items-center justify-center mt-5'}>
                {/* <FontAwesomeIcon icon={solid('arrow-up')} /> */}
                <Button colorScheme={'messenger'} onClick={() => movePlayerOnSide(Side.UP)} mb={'2'}>
                    Up
                </Button>
                {/* <div className={'flex justify-between'}> */}
                <div className='flex'>
                    <Button colorScheme={'messenger'} onClick={() => movePlayerOnSide(Side.LEFT)} mr={'4'}>
                        Left
                    </Button>
                    <Button colorScheme={'messenger'} onClick={() => movePlayerOnSide(Side.RIGHT)}>
                        Right
                    </Button>
                </div>
                {/* </div> */}
                <Button colorScheme={'messenger'} onClick={() => movePlayerOnSide(Side.DOWN)} mt={'2'}>
                    Down
                </Button>
            </div>
        </>
    );
};

export default Controls;
