import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ handler, id, name, description, price, urlImg }) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
        navigate('/cart');
    }
    
    return (
        <>
            <div className="card" style={{ width: '11rem'}} >
                <img className="card-img-top w-75" src={urlImg} />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text" style={{ fontSize: '0.6rem'}}>{description}</p>
                    <p className="card-text" style={{ fontSize: '0.8rem'}}>Q. {price}</p>
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>                
            </div>
        </>
    )
}
