import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>,
  </Provider>
)
