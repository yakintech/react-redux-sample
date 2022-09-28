import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SiteHeader(props) {
    return (<>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/cart2'>Cart-2</Link></li>

        </ul>
        <div>Cart: {props.cart.length} </div>
    </>

    )
}


const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

export default connect(mapStateToProps)(SiteHeader)