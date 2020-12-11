import { useReducer, useContext, createContext } from 'react'
const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  // tags:[]
}

const reducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_TAG':
    //   return {
    //     ...state,
    //     tags:[
    //       ...state.tags,
    //       action.newTag
    //     ]
    //   }
    //   break
    default:
      return state
  }
} 

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
  )
}

export const useStore = () => useContext(storeContext)

export const useDispatch = () => useContext(dispatchContext)

export default StoreProvider