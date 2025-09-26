// SeccionContacto.jsx
import React, { useState } from "react"; 
import style from "../styles/SeccionContacto.module.css"; // Importamos los estilos desde un archivo CSS modular
import Link from "next/link";
export default function SeccionContacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",   
    email: "",    
    correo: "",   
    telefono: "",
    mensaje:"",
  });
  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario({
      ...formulario, // copiamos todos los valores actuales
      [name]: value, // reemplazamos solo el campo que cambió
    });
  }

  function manejarEnvio(evento) {
    evento.preventDefault(); //Evita que el formulario recargue la página al enviar
    console.log("Formulario enviado:", formulario); // 🔹 Aquí se puede mandar a un backend o API
    alert("Gracias por contactarnos, recibimos tu mensaje!");
  }
  return (
    <section className={style.seccionContacto}>
      {/* Título */}
      <h2 className={style.titulo}>Contáctanos</h2>
      {/* Subtítulo */}
      <p className={style.subtitulo}>
        Completa el siguiente formulario y nos pondremos en contacto contigo.
      </p>

      {/* Formulario */}
      <form className={style.formulario} onSubmit={manejarEnvio}>
        {/* Input de nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          required // Hace que sea obligatorio llenar este campo
        />

        {/* Input de email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formulario.email}
          onChange={manejarCambio}
          required
        />

        {/* Input de teléfono */}
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formulario.telefono}
          onChange={manejarCambio}
          required
        />
        {/* 🔹 Campo para mensaje */}
        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={formulario.mensaje}
          onChange={manejarCambio}
          required
          rows={5} //filas 
        />

        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// 1. Queremos guardar lo que el usuario escribe → usamos useState para almacenar los valores del formulario.
//2. Necesitamos detectar qué input cambió → usamos onChange en cada input.
//3. El navegador nos da un evento con la info → lo recibimos como (evento).
//4. Extraemos el nombre y el valor del input → const { name, value } = evento.target.
//5. Actualizamos el estado del formulario dinámicamente → setFormulario({...formulario, [name]: value}).