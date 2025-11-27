import { createContext, useReducer, useEffect, useRef } from "react"; 
import axios from "axios";
import { shoppingCartInitialState } from "../../shopping_cart_reducer/shoppingCartInitialState";
import { shoppingCartReducer } from "../../shopping_cart_reducer/shoppingCartReducer";
import { TYPES } from "../../shopping_cart_reducer/shoppingCartActions";

export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState);
    const isInitialMount = useRef(true);

    // EFECTO 1: Cargar PRODUCTOS desde la Base de Datos (Backend)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const ENDPOINT = "http://localhost:5000/products";
                const response = await axios.get(ENDPOINT);
                // Despachamos la acción para guardar los productos en el estado global
                dispatch({ type: TYPES.SET_PRODUCTS, payload: response.data });
            } catch (error) {
                console.error("Error cargando productos al carrito:", error);
            }
        };
        fetchProducts();
    }, []);

    // EFECTO 2: Cargar el CARRITO desde Local Storage al iniciar
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                dispatch({ type: TYPES.LOAD_CART_FROM_STORAGE, payload: JSON.parse(savedCart) });
            }
        }
    }, []);

    // EFECTO 3: Guardar el CARRITO en Local Storage cada vez que cambie
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    
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