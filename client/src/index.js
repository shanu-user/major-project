import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
// import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import "./index.css"
import reportWebVitals from './reportWebVitals';
import Reducer from './reducers'
// import { SocketProvider } from './Providers/Socket'

const store = configureStore({reducer: Reducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <SocketProvider> */}
    <Provider Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  {/* </SocketProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
