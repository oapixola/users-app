import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async() => {
        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false);
    }

    useEffect(
        () => {
            findAll();
        }, []);

        const urlImg = [
            {             
              imageUrl: 'https://iconsportsgroup.com/cdn/shop/products/Barcelona-Black-Tshirt-Front_df334041-e5f1-401e-b287-622fa5887855_800x.jpg?v=1598485193' // Imagen 1
            },
            {              
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qgwpFFJb2Q8sPVYGqC0kGNetdMhkNFyJmA&s' // Imagen 2
            },
            {              
              imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a572caa3-8e1a-49a9-9372-ae9ced5fa162/M+NK+TF+PANT+TAPER.png' // Imagen 3
            },
            {              
              imageUrl: 'https://carulla.vtexassets.com/arquivos/ids/9141910/balon-futbol-mundial-qatar-2022-alta-resistencia-aaa.jpg?v=637986149101170000' // Imagen 4
            },
            {              
              imageUrl: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/e/pelota-futbol-depor-neopais-brasil-5-viniball-14295-default-1.jpg' // Imagen 5
            },
            {              
              imageUrl: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-de-running-nike-revolution-6-gris-510010dc3728004-1.jpg' // Imagen 6
            },
          ];
    
    return (
        <>
            {
                isLoading &&
                <div className="alert alert-info">Cargando ...</div>
            }
            <div 
                className="container-fluid position-relative p-3 bg-light"
                style={{
                    backgroundImage: 'url(https://tecnosoluciones.com/wp-content/uploads/2024/05/Crear-un-Sitio-Web-para-una-Tienda-de-Productos-Deportivos.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center'
                }}
                >
            <img
                    src="src\img\logosport.jpg"
                    alt="Logo"
                    className="position-absolute top-0 end-0 p-0"
                    style={{ width: '150px', height: '150px' }}
                />    
            </div>    
            <div className="container-fluid position-relative p-2 bg-light"
                style={{                
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    textAlign: 'center'
                }}>
                {/* Banner de fondo */}
                <div className="banner-content">
                    <h1 className="display-6" >Bienvenido a Sport Gear Pro</h1>                    
                </div>            
            </div>        
            <div className="row">
                {products.map(prod => (
                    <div className="col-3 my-4"
                        key={prod.id}>
                        <ProductCardView
                            handler={ handler }
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                            urlImg={urlImg[prod.id-1].imageUrl}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}