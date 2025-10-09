import ShoppingCartContextProvider from './carrito/ShoppingCartContextProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartContextProvider>
      <Component {...pageProps} />
    </ShoppingCartContextProvider>
  );
}

export default MyApp;

