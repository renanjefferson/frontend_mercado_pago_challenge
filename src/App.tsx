import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer role="alert" />
      <GlobalStyle />
      <Routes />
    </Router>
  );
};

export default App;
