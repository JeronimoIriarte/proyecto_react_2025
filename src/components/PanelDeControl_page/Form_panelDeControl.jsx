import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios';
import cloudinaryConfig from "@/components/CloudinaryConfig";
import styles from '@/styles/style_PanelDeControl/Form_panelDeControl.module.css'

const initialForm = {
    id: null,
    title: '',
    price: '',
    imageUrl: '',
    imageAltUrl: '',
    description: '',
    category: '',
    onSale: false,
};

export const Form_panelDeControl = ({ createProduct, updateProduct, dataToEdit }) => {

    const [formData, setFormData] = useState(initialForm);


    useEffect(() => {
        if (dataToEdit) {
            setFormData(dataToEdit);
        } else {
            setFormData(initialForm);
        }
    }, [dataToEdit])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = async (event, type) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", cloudinaryConfig.uploadPreset);

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
                    formData
                );
                const imageUrl = response.data.secure_url;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [type]: imageUrl,
                }));

            } catch (error) {
                console.error("Error al subir la imagen:", error);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.title || !formData.price || !formData.description || !formData.imageUrl || !formData.imageAltUrl || !formData.category) {
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
            <Link href="/" className={styles.inicioButton}>Volver A La Pagina Principal</Link>
            <div className={styles.formPage}>
                <h2 className={styles.titulo}>Panel de control</h2>
                <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
                    <input className={styles.input} type="text" name='title' placeholder="Titulo" onChange={handleChange} value={formData.title} />

                    <input className={styles.input} type="text" name='price' placeholder="Precio" onChange={handleChange} value={formData.price} />

                    <input className={styles.input_img} type="file" accept="image/*" onChange={(e) => handleImageChange(e, "imageUrl")} />
                    {formData.imageUrl && <img src={formData.imageUrl} alt="Vista previa" width="200" />}

                    <input className={styles.input_imgAlt} type="file" accept="image/*" onChange={(e) => handleImageChange(e, "imageAltUrl")} />
                    {formData.imageAltUrl && <img src={formData.imageAltUrl} alt="Vista previa" width="200" />}

                    <textarea className={`${styles.input} ${styles.inputDescription}`} name='description' onChange={handleChange} value={formData.description} placeholder='Descripcion del producto'></textarea>
                    <select className={styles.input} name='category' onChange={handleChange} value={formData.category}>
                        <option value={null}>Seleccione una categoria</option>
                        <option value="seleccion_arg">Seleccion Argentina</option>
                        <option value="boca">Boca Juniors</option>
                        <option value="river">River Plate</option>
                        <option value="independiente">Independiente</option>
                        <option value="racing">Racing Club</option>
                        <option value="san_lorenzo">San Lorenzo</option>
                        <option value="importadas">Importadas</option>
                    </select>
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="onSale"
                                value="true"
                                checked={formData.onSale === true}
                                onChange={(e) => setFormData({ ...formData, onSale: e.target.value === "true" })}
                            />
                            En oferta
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="onSale"
                                value="false"
                                checked={formData.onSale === false}
                                onChange={(e) => setFormData({ ...formData, onSale: e.target.value === "true" })}
                            />
                            No en oferta
                        </label>
                    </div>
                    <div className={styles.buttonContainer}>
                        <input className={styles.inputButton} type="submit" value="Enviar" onClick={handleSubmit} />
                        <input className={styles.inputButton} type="reset" value="Limpiar" onClick={handleReset} />
                    </div>
                </form>
            </div>
        </>
    )
}





