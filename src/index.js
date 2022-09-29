import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { todoReducer } from './redux/reducers/todo.reducer';
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));

 const codeStore = createStore(todoReducer, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={codeStore}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

