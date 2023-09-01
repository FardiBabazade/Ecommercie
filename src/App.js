import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Registration from './pages/Registration.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation.jsx';
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/registration" element={<Registration />} ></Route>
          <Route path="/passwordrefresh" element={<ForgotPassword />} ></Route>
          <Route path="/passwordconfirm" element={<ForgotPasswordConfirmation />} ></Route>
          <Route path="/products" element={<Product />} ></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
