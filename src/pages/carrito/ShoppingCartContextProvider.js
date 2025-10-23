import { createContext, useReducer, useEffect, useRef } from "react"; 
import { shoppingCartInitialState } from "../../shopping_cart_reducer/shoppingCartInitialState";
import { shoppingCartReducer } from "../../shopping_cart_reducer/shoppingCartReducer";
import { TYPES } from "../../shopping_cart_reducer/shoppingCartActions";


export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState);

    const isInitialMount = useRef(true);

    // EFECTO 1: Cargar el carrito desde Local Storage al iniciar la app
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                dispatch({ type: TYPES.LOAD_CART_FROM_STORAGE, payload: JSON.parse(savedCart) });
            }
        }
    }, []); // [] asegura que este efecto se ejecute solo una vez

    // EFECTO 2: Guardar el carrito en Local Storage cada vez que cambie
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        // Guardamos el estado actual del carrito en Local Storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]); // se ejecuta cada vez que state.cart cambia

    
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
        clearCart,
    };

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
export default ShoppingCartContextProvider;