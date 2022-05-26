import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './redux/store';
// import App from './pages/demo/App';
// import AutoSearch from './pages/demo/AutoSearch';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
