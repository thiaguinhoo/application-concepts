import { useEffect } from 'react';
import { useAuth } from '../../contexts/auth';
import Form from '../Form';
import { instance } from '../../services/instance';

const App = () => {
  const { signed, setSigned } = useAuth();

  useEffect(() => {
    instance
      .get('/')
      .then((response) => {
        if (response.status === 200) {
          setSigned(true);
        }
      })
      .catch(() => setSigned(false));
  }, []);

  if (signed) {
    return <h1>Welcome to development world!</h1>;
  }
  return <Form />;
};

export default App;
