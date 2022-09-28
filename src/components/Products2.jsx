import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function Products2() {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, []);


    const dispatch = useDispatch();

    const add = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item })
    }

    const increase = () => {
        dispatch({ type: 'INCREASE', payload: 'YOK' })
    }

    return (
        <>
        <button onClick={() => increase()}>Increase</button>
          <ul>
            {
                products && products.map((item, key) => {

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

export default Products2