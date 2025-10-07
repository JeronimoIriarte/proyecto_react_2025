import React from 'react'
import { useState, useEffect } from 'react'

const initialForm = {
    id: null,
    title: '',
    price: '',
    image: null,
    image_alt: null,
    description: ''
};

export const Form_crud = ({ createProduct, updateProduct, dataToEdit }) => {

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setFormData(dataToEdit);
        } else {
            setFormData(initialForm);
        }
    }, [dataToEdit])


    const handleChange = (event) => {
        setFormData((prevFormData) => {

            const { name, value, type, files } = event.target;

            if (type === "file") {
                return {
                    ...prevFormData,
                    [name]: files[0]
                };
            } else {
                return {
                    ...prevFormData,
                    [name]: value
                };
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.title || !formData.price || !formData.image || !formData.image_alt || !formData.description) {
            alert("Datos incompletos");
            return;
        }
        if (formData.id === null) {
            createProduct(formData);
        } else {
            updateProduct(formData);
        }
        handleReset();
    }

    const handleReset = () => {
        setFormData(initialForm);
    }

    return (
        <>
            <h2>Titulo</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <input type="text" name='title' placeholder="title" onChange={handleChange} value={formData.title} />
                <input type="text" name='price' placeholder="price" onChange={handleChange} value={formData.price} />
                <input type="file" name='image' id="image" accept="image/*" onChange={handleChange} ></input>
                {formData.image && (
                    <div>
                        <p>Vista previa de la imagen:</p>
                        <img
                            src={
                                typeof formData.image === 'string'
                                    ? formData.image
                                    : URL.createObjectURL(formData.image)
                            }
                            style={{ width: '200px', height: 'auto' }}
                        />
                    </div>
                )}
                <input type="file" name='image_alt' id="image_alt" accept="image/*" onChange={handleChange}></input>
                {formData.image_alt && (
                    <div>
                        <p>Vista previa de la imagen:</p>
                        <img
                            src={
                                typeof formData.image_alt === 'string'
                                    ? formData.image_alt 
                                    : URL.createObjectURL(formData.image_alt)
                            }
                            style={{ width: '200px', height: 'auto' }}
                        />
                    </div>
                )}
                <input type="text" name='description' placeholder='description' onChange={handleChange} value={formData.description} />
                <input type="submit" value="Enviar" onClick={handleSubmit} />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </>
    )
}
