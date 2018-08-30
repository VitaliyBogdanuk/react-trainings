import { ADD_TO_CART, REMOVE_FROM_CART } from './constants'

export const addToCart = (adder) => {
  return {
    type: ADD_TO_CART,
    adder
  }
}

export const removeFromCart = (subtractor) => {
  return {
    type: REMOVE_FROM_CART,
    subtractor
  }
}
