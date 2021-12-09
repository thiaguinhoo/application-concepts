import ReactDOM from 'react-dom';

import App from './components/App';
import AuthProvider from './contexts/auth';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <AuthProvider>
    <GlobalStyles />
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
