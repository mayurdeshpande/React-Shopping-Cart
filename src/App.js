import { Link } from "react-router-dom";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Cart from './containers/cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className='header'>
          <div className='header-div'>
            <div className='App-logo'>My Kart</div>
            <div>
              <Link to="/cart">
                <img className='cart-icon' src={process.env.PUBLIC_URL + 'images/cart-icon.png'} />
              </Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
