import { ADD_TO_CART, REMOVE_FROM_CART } from './constants'

const initialState = { amount: 0 }

const sumReducer = (state = initialState, action) => {
  var newState = 0
  switch (action.type) {
    case ADD_TO_CART:
      newState = { amount: state.amount + action.adder }
      return Object.assign({}, state, newState)
    case REMOVE_FROM_CART:
      newState = { amount: state.amount - action.subtractor }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}

export default sumReducer
