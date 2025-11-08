import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import styles from "@/styles/style_shoppingCart/SimulacionCompra_shoppingCart.module.css";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";


const SimulacionCompra = () => {

    const { state, clearCart } = useContext(ShoppingCartContext);
    const { cart } = state;

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la ventana modal
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        card: "",
        expiry: "",
        cvv: "",
    }); // Estado para los datos del formulario
    const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        wrapperProps,
        getCardImageProps,
    } = usePaymentInputs();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.address) {
            alert("Datos incompletos");
            return;
        }

        clearCart(); // Limpia el carrito
        setIsModalOpen(false); // Cierra la ventana modal
        setSuccessMessage("Compra realizada con éxito"); // Muestra el mensaje de éxito
        setFormData(formData); // Limpia el formulario
    };

    const getNumericPrice = (priceString) => {
        if (typeof priceString !== 'string') return 0;
        return parseFloat(priceString.replace(/[^0-9.-]+/g, "")) || 0;
    }

    const total = cart.reduce((acc, item) => acc + getNumericPrice(item.price) * item.quantity, 0);

    return (
        <>
            <div>
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                {cart.length === 0 ? (
                    <button disabled className={styles.buyDisabledButton}>Comprar</button>
                ) : (
                    <>
                        <button onClick={() => setIsModalOpen(true)} className={styles.buyButton}>
                            Comprar
                        </button>
                    </>
                )}

                {/* Modal */}
                {isModalOpen && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modal}>
                            <h3>Finalizar Compra</h3>
                            <div className={styles.cartTotal}>
                                Total: ${total.toLocaleString("es-ES")}
                            </div>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.form_datosPersonales}>
                                    <div className={styles.form_item}>
                                        <label htmlFor="name">Nombre Completo:</label>
                                        <input
                                            className={styles.form_input}
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.form_item}>
                                        <label htmlFor="address">Dirección:</label>
                                        <input
                                            className={styles.form_input}
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <svg className={styles.customCardImage} {...getCardImageProps({ images })} />
                                <div className={styles.cardWrapper} {...wrapperProps}>
                                    
                                    <input
                                        className={styles.form_input}
                                        {...getCardNumberProps()}
                                        placeholder="Número de Tarjeta"
                                        name="card"
                                        required
                                    />
                                    <input
                                        className={styles.form_input}
                                        {...getExpiryDateProps()}
                                        placeholder="Fecha de Expiración (MM/AA)"
                                        name="expiry"
                                        required
                                    />
                                    <input
                                        className={styles.form_input}
                                        {...getCVCProps()}
                                        placeholder="CVV"
                                        name="cvv"
                                        required
                                    />
                                </div>

                                <button type="submit" className={styles.submitButton} onSubmit={handleSubmit}>
                                    Finalizar Compra
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className={styles.cancelButton}
                                >
                                    Cancelar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SimulacionCompra;