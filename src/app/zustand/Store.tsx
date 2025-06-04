import { create } from 'zustand'

// Define the type for the store
interface State {
    initialState: {
        SwipedIndex:number;
  }
  setSwipedIndex: (value: number) => void
}

// Create the store with type support
const useStore = create<State>((set) => ({
    initialState: {
      SwipedIndex: 0
    }
  ,
  setSwipedIndex: (value) =>
    set(() => ({
      initialState: { SwipedIndex: value }
    }))
}))

export default useStore
