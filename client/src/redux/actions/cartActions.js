import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
//  const URL ='https://ecommerce-0m16.onrender.com';
export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        // console.log('Error while calling cart API');
		dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
    }
};  

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

};