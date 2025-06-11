import { create } from 'zustand'

// Define the type for the store
interface State {
  initialState: {
    SwipedIndex: number;
    label: string;
  };
  setSwipedIndex: (value: number) => void;
  setLabel: (value: string) => void;
}

// Create the store with type support
const useStore = create<State>((set) => ({
  initialState: {
    SwipedIndex: 0,
    label: "",
  },
  setSwipedIndex: (value) =>
    set((state) => ({
      initialState: { ...state.initialState, SwipedIndex: value },
    })),
  setLabel: (value) =>
    set((state) => ({
      initialState: { ...state.initialState, label: value },
    })),
}));

export default useStore;