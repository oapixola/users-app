import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducers/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducers/itemsActions";

const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        } else {
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}