import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import Cart from './components/Cart'
import Cart2 from './components/Cart2'
import Products from './components/Products'
import SiteHeader from './components/SiteHeader'
import { cartReducer } from './redux/reducers/cart.reducer'
import { counterReducer } from './redux/reducers/counter.reducer'
import reducer from './redux/reducers'
import Products2 from './components/Products2'


const codeStore = createStore(reducer)

function App() {
  return (<>
    <Provider store={codeStore}>

      <SiteHeader />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products2' element={<Products2 />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart2' element={<Cart2 />} />

      </Routes>
    </Provider>
  </>
  )


}

export default App