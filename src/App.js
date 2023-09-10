import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Registration from './pages/Registration.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation.jsx';
import Product from './pages/Product';
import BasketPage from './pages/BasketPage';
import FavoritePage from './pages/Favorite';
import OrderPage from './pages/OrderPage.jsx';
import Payment from './pages/Payment.jsx';
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
        <Route path="/basket" element={<BasketPage />} ></Route>
        <Route path="/favorite" element={<FavoritePage />} ></Route>
        <Route path="/order" element={<OrderPage />} ></Route>
        <Route path="/payment" element={<Payment />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
