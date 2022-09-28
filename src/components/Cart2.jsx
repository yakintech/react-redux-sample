import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart2() {

    //mapStateToProps
    const cart = useSelector(cart => cart);

    //mapDispatchToProps
    const dispatch = useDispatch()

   


    const empty = () => {
        dispatch({ type: 'EMPTY_CART', payload: '' })
    }
    return (
        <>
            <button onClick={() => empty()}>Empty</button>
            <ul>
                {
                    cart && cart.map((item, key) => <li key={key}>{item.name}</li>)
                }
            </ul>
        </>


    )
}

export default Cart2