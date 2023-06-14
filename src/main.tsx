// STYLES IMPORTS
import './styles/index.scss';

// REACT IMPORTS
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// REDUX/STORE IMPORTS
import store from './store';

// COMPONENTS IMPORTS
import App from './components/App';

// ROOT INJECTION AND RENDER
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
