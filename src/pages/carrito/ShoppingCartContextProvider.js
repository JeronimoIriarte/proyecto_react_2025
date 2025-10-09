import { createContext, useReducer } from "react";
import { shoppingCartInitialState } from "../../shopping_cart_reducer/shoppingCartInitialState";
import { shoppingCartReducer } from "../../shopping_cart_reducer/shoppingCartReducer";
import { TYPES } from "../../shopping_cart_reducer/shoppingCartActions";


export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState);

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_ITEM, payload: id });
        }
    };
    const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

    const contextValue = {
        state,
        addToCart,
        deleteFromCart,
        clearCart
    };

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
export default ShoppingCartContextProvider;