import React from 'react'
import { useState } from 'react'

const initialForm = {
    title: '',
    price: null,
    imagen: null,
    imagen_alt: null,
    description: ''
};

export const Form_crud = () => {

    const [formData, setFormData] = useState(initialForm);

    const handleChange = () => {}

    const handleSubmit = () => {}

    const handleReset = () => {}

    return (
        <>
            <h2>Titulo</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <input type="text" placeholder= "title" />
                <input type="number" placeholder='price' />
                <input type="file" id="imagen" accept="image/*"></input>
                <input type="file" id="imagen_alt" accept="image/*"></input>
                <input type="text" placeholder='description' />
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </>
    )
}
