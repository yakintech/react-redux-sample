import React from 'react'
import { connect } from 'react-redux'
import { emptyCartAction } from '../redux/actions/cart.actions'

function Cart(props) {

    return (
        <>
        <button onClick={() => props.empty()}>Empty</button>
         <ul>
            {
                props.cart && props.cart.map((item,key) => <li key={key}>{item.name}</li>)
            }
        </ul>
        </>
       

    )
}


const mapStateToProps = (state) => {
    return {
        cart: state
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        //prop function
        empty :  (data) => {
            dispatch(emptyCartAction())
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)