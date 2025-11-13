import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/style_home/Login_home.module.css";

function Login() {
    const [input, setInput] = useState({ text: "", password: "" });
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.text === "admin" && input.password === "123456") {
            setMessage("Acceso concedido. Redirigiendo a panel de control...");
            setTimeout(() => {
                router.push("/panelDeControl");
            }, 1000);
        } else {
            setMessage("Acceso denegado. Redirigiendo a productos...");
            setTimeout(() => {
                router.push("/productos");
            }, 3000);
        }
    };

    return (
        <div className={styles.contenedorModal}>
            <h2>Iniciar Sesion</h2>
            <form className={styles.formModal} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    placeholder="Usuario"
                    value={input.text}
                    onChange={handleInput}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={input.password}
                    onChange={handleInput}
                    required
                />
                <input type="submit" name="submit" value="Ingresar"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={styles.containerButton}>
            <button className={styles.buttonSesion} onClick={openModal}>Iniciar Sesion</button>

            {isModalOpen && (
                <div className={styles.backdrop} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </button>
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
};


export default App;