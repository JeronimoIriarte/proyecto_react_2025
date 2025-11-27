import { TYPES } from "@/shopping_cart_reducer/shoppingCartActions";

export const shoppingCartReducer = (state, action) => {
    switch (action.type) {
        case TYPES.LOAD_CART_FROM_STORAGE: {
            return {
                ...state,
                cart: action.payload,
            };
        }
        case TYPES.READ_STATE:{
            const { products, cart } = action.payload;

            return {
                ...state,
                products,
                cart
            }
        }
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }
        case TYPES.REMOVE_ONE_ITEM: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_ITEMS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }
        case TYPES.SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload // Guarda los productos que vienen de la BD
            };
        }
        default:
            return state;
    }
}