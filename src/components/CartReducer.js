import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
  } from "../Types/Types";
  
  export const initialState = {
    cart: [],
  };
  
  export function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        // Check if the product is already in the cart
        const existingCartItem = state.cart.find((item) => item.id === action.payload);
  
        if (existingCartItem) {
          // If it's in the cart, update the quantity
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          // If it's not in the cart, add it with a quantity of 1
          return {
            ...state,
            cart: [...state.cart, { id: action.payload, quantity: 1 }],
          };
        }
      }
      case REMOVE_ONE_FROM_CART: {
        // Find the index of the item to remove
        const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
  
        if (itemIndex !== -1) {
          // If the item is found, decrease its quantity
          const updatedCart = [...state.cart];
          if (updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity--;
          } else {
            // If the quantity is 1, remove the item from the cart
            updatedCart.splice(itemIndex, 1);
          }
  
          return {
            ...state,
            cart: updatedCart,
          };
        }
        return state;
      }
      case REMOVE_ALL_FROM_CART: {
        // Remove all items with the specified ID from the cart
        const updatedCart = state.cart.filter((item) => item.id !== action.payload);
  
        return {
          ...state,
          cart: updatedCart,
        };
      }
      case CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  }

  
  