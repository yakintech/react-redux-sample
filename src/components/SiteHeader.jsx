import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SiteHeader(props) {

    return (<>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/cart2'>Cart-2</Link></li>
            <li><Link to='/products2'>Products-2</Link></li>


        </ul>
        <h1>Cart: {props.state.cartReducer.length} </h1>
        <h1>Counter: {props.state.counterReducer} </h1>
        
    </>

    )
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(SiteHeader)