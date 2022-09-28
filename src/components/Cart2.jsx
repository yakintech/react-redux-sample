import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart2() {

    //mapStateToProps
    //global states...
    const cart = useSelector(state => state.cartReducer);
    const counter = useSelector(state => state.counterReducer);




    //mapDispatchToProps
    const dispatch = useDispatch()

   


    const empty = () => {
        dispatch({ type: 'EMPTY_CART', payload: '' })
    }
    return (
        <>
        <h1>Counter: {counter}</h1>
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