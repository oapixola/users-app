import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext);
    
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }
    return (
    <>
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

            <div className="container-fluid position-relative p-5"
                style={{           
                    backgroundColor: 'black',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',   
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center'
                }}>
                {/* Banner de fondo */}
                <div className="banner-content">
                    <h1 className="display-4" >Welcome</h1>                    
                </div>            
            </div>      
   
        <div className="modal" style={ {display: 'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page - Sports Gear Pro</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={ onInputChange }
                            />
                            
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                            <button
                                className="btn btn-primary"
                                >
                                Crear Usuario
                            </button>     
                                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );

}