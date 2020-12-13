import { useReducer, useContext, createContext } from 'react'
const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  // tags:[]
  cart:[]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const rest = state.cart.filter(item=>Object.keys(item)[0]!==action.newProduct.id)
      const oldCant =
        state.cart.filter(item=>Object.keys(item)[0]===action.newProduct.id)[0] && 
        state.cart.filter(item=>Object.keys(item)[0]===action.newProduct.id)[0][action.newProduct.id].cantidad ||
        0
      return{
        ...state,
        cart:[
          {[action.newProduct.id]:{
            ...action.newProduct,
            cantidad:oldCant+action.cantidad
          }},
          ...rest
        ]
      }
      break
    case 'REMOVE_CART':
      return {
        ...state,
        cart:[...state.cart.filter(item=>Object.keys(item)[0]!==action.id)]
      }
      break
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