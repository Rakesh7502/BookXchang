
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Alerts from './components/Alerts';
import { useState } from 'react';
import BookState from './context/books/BookState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Buy from './components/Buy';
import Product_details from './components/Product_details';
import Sell from './components/Sell';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, signal) => {
    setAlert({
      msg: message,
      type: signal
    })
    setTimeout(() => { setAlert(null) }, 1500)

  }
  return (
    <>
      <BookState>


        <Router>


          <Navbar showAlert={showAlert} />
          <Alerts alert={alert} />

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/buy" element={<Buy />} />
              <Route exact path="/sell" element={<Sell/>} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
              <Route exact path="/buy/viewBookDetails/:id" element={<Product_details id={1}/>} />

            </Routes>

          </div>


        </Router>
      </BookState>
    </>
  );
}

export default App;
