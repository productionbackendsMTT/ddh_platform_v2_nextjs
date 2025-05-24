import { create } from 'zustand'

// Define the type for the store
interface State {
    initialState: {
        isSwiped: boolean;
  }
  setSwiped: (value: boolean) => void
}

// Create the store with type support
const useStore = create<State>((set) => ({
    initialState: {
        isSwiped: false
    }
  ,
  setSwiped: (value) =>
    set(() => ({
      initialState: { isSwiped: value }
    }))
}))

export default useStore
