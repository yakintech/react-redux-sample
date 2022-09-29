import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import Cart from './components/Cart'
import Cart2 from './components/Cart2'
import Products from './components/Products'
import SiteHeader from './components/SiteHeader'
import { cartReducer } from './redux/reducers/cart.reducer'
import { counterReducer } from './redux/reducers/counter.reducer'
import reducer from './redux/reducers'
import Products2 from './components/Products2'
import { todoReducer } from './redux/reducers/todo.reducer'
import TodoList from './components/TodoList'
import { basemanager } from './network/api'
import { getAllTodos } from './redux/actions/todo.action'


// const codeStore = createStore(todoReducer)

function App() {

  let dispatch = useDispatch();

  useEffect(() => {


     //her zaman PURE JS OBJELERİ ALIRLAR!!!
     dispatch(getAllTodos())
  

  }, [])





  return (<>


    {/* <SiteHeader /> */}

    <ul>
      <li><Link to='/todos'>Todos</Link></li>
    </ul>
    <Routes>

      <Route path='/todos' element={<TodoList />}></Route>
      {/* <Route path='/' element={<Products />} />
        <Route path='/products2' element={<Products2 />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart2' element={<Cart2 />} /> */}

    </Routes>

  </>
  )


}

export default App