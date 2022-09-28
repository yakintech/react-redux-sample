import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addToCartAction } from '../redux/actions/cart.actions';

function Products(props) {

    const [products, setproducts] = useState([]);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, []);


    const add = (item) => {

        props.addToCart(item)
    }


    return (<>
    <ul>
        {
            products && products.map((item,key) => {

                return <Fragment key={key}>
                    <li>{item.name}</li>
                    <button onClick={() => add(item)}>Add To Cart</button>
                </Fragment>

            })
        }
    </ul>
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        //cart -> prop name
        cart : state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        //addToCart -> prop name
        addToCart: (data) => {
            dispatch(addToCartAction(data))
        }
    }

}


export default  connect(mapStateToProps, mapDispatchToProps)(Products)