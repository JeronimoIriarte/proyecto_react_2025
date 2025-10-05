
const Tarjeta = (props) => {

    const { image, title, price, id } = props.productos;

    return (
        <>
            <div className="card">
                <img src={image} alt={id} className="image"/>
                <div className="image-content">
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <style jsx>{`
.card {
    background-color: var(--color-background);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 50px;
}

.image{
    width: 300px;
    height: 300px;
    border-radius: 8px;
    margin-right: 20px;
    margin-top: 20px;
    }
}

.image-content {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    }

.image-content h3 {
    margin: 10px;
    font-size: 1.2rem;
    color: var(--color-primary);
    }

button {
    background-color: var(--color-background-alt); ;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 3px -3px gray;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 10px;
    }
}
        `}</style>
        </>
    );
};

export default Tarjeta;
