import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface State {
    isShowControlsHint: boolean;
}

interface Actions {
    setIsShowControlsHint: (isShow: boolean) => void;
}

export const useControlsStore = create(
    devtools(
        persist(
            immer<State & Actions>((set, get) => ({
                isShowControlsHint: true,
                setIsShowControlsHint: (isShow) =>
                    set((state) => {
                        state.isShowControlsHint = isShow;
                    }),
            })),
            { name: 'controlsState' },
        ),
    ),
);
