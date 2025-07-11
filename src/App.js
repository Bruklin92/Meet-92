import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import Footer from './component/Footer/Footer';
import { Provider } from 'react-redux';
import { strore } from './redux/store/store';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Provider store={strore}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  );
}

export default App;
