import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import Cart from './components/Cart'
import Cart2 from './components/Cart2'
import Products from './components/Products'
import SiteHeader from './components/SiteHeader'
import { cartReducer } from './redux/reducers/cart.reducer'


const codeStore = createStore(
  cartReducer
)

function App() {
  return (<>
    <Provider store={codeStore}>

      <SiteHeader />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart2' element={<Cart2 />} />

      </Routes>
    </Provider>
  </>
  )


}

export default App