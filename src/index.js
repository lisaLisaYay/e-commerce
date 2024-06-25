import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchProducts } from './features/products/productsSlice';
import ScrollToTop from "./features/hooks/ScrollToTop";

store.dispatch(fetchProducts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="*" element={<App />}/>
          </Routes>
        </Router>
    </Provider>
  </React.StrictMode>
);

