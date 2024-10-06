import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"
import { RegisterPage } from "../pages/RegisterPage"
import { UsersPage } from "../pages/UsersPage"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"

import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"
import { useItemsCart } from "../hooks/useItemsCart";


export const UserRoutes = () => {
    const { login } = useContext(AuthContext);
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />

                    {!login.isAdmin || <>
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>
                    }
                    <Route
                        path="catalog"
                        element={<CatalogView handler={handlerAddProductCart} />}
                    />
                    <Route path="cart" element={(
                        cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                            :
                            (
                                <div   div className="my-4 w-50">
                                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                                </div>
                            )
                    )} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}