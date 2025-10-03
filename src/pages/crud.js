import Link from "next/link";

const crud = () => {
    return ( <>
        <div>
            <Link href="/">Volver a la pagina principal</Link>
            <h1 className="titulo_principal">Pagina de operaciones CRUD</h1>
        </div>
        <div className="container_crud">
            <div className="card_crud">
                <h2>Crear</h2>
                <p>Agregar nuevos registros a la base de datos.</p>
                <form>
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Descripción"/>
                    <input type="text" placeholder="Categoría"/>
                    <input type="number" placeholder="Precio"/>
                    <button type="submit">Crear</button>
                </form>
            </div>
            <div className="card_crud">
                <h2>Actualizar</h2>
                <p>Modificar registros existentes en la base de datos.</p>
                <form>
                    <input type="text" placeholder="ID del registro"/>
                    <input type="text" placeholder="Nuevo Nombre"/>
                    <input type="text" placeholder="Nueva Descripción"/>
                    <input type="text" placeholder="Nueva Categoría"/>
                    <input type="number" placeholder="Nuevo Precio"/>
                    <button type="submit">Actualizar</button>
                </form>
            </div>
            <div className="card_crud">
                <h2>Eliminar</h2>
                <p>Borrar registros de la base de datos.</p>
                <form>
                    <input type="text" placeholder="ID del registro"/>
                    <button type="submit">Eliminar</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default crud