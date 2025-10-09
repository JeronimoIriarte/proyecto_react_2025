import productsData from '../data/products.json';

export const shoppingCartInitialState = {
    products: productsData.products,
    cart: []
};