import React from 'react'
import styles from '@/styles/style_PanelDeControl/Productos_panelDeControl.module.css';
import Card_panelDeControl from '@/components/PanelDeControl_page/Card_panelDeControl';



const productos_panelDeControl = ({handleFilterChange, deleteProduct, setDataToEdit, filteredProducts, isLoading }) => {
    return (
        <div className={styles.contenedorDeProductos}>
            <div className={styles.filtro}>
                <h3>Filtro de camisetas</h3>
                <div className={styles.filtroBotones}>
                    <button onClick={() => handleFilterChange("All")}>
                        Todos
                    </button>
                    <button onClick={() => handleFilterChange("Ofertas")}>
                        Ofertas
                    </button>
                    <button onClick={() => handleFilterChange("seleccion_arg")}>
                        Selección Argentina
                    </button>
                    <button onClick={() => handleFilterChange("boca")}>
                        Boca Juniors
                    </button>
                    <button onClick={() => handleFilterChange("river")}>
                        River Plate
                    </button>
                    <button onClick={() => handleFilterChange("racing")}>
                        Racing Club
                    </button>
                    <button onClick={() => handleFilterChange("independiente")}>
                        Independiente
                    </button>
                    <button onClick={() => handleFilterChange("san_lorenzo")}>
                        San Lorenzo
                    </button>
                    <button onClick={() => handleFilterChange("importadas")}>
                        Importadas
                    </button>
                </div>
            </div>
            <div className={styles.productGrid}>
                {isLoading ? (
                    <div className={styles.loadingContainer}>
                        <img
                            src="/gifs/loading.gif"
                            alt="Cargando..."
                            className={styles.loadingGif}
                        />
                    </div>
                ) : (

                    filteredProducts.map((product) => (
                        <Card_panelDeControl key={product.id} product={product} deleteProduct={deleteProduct} setDataToEdit={setDataToEdit} />
                    ))

                )}
            </div>
        </div>
    )
}

export default productos_panelDeControl