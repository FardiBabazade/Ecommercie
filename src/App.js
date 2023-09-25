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
import UserInfo from './pages/UserInfo';
import UserInfoInformation from './pages/UserInfoInformation.jsx';
import UserAddress from './pages/UserAddress';
import PaymentMethodspage from './pages/PaymentMethodspage';
import UserOrderPage from './pages/UserOrderPage';
import Ratingpage from './pages/Ratingpage';

function App() {

       
  //  const {t,i18n}=useTranslation();

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
        <Route path="/userinfo/home" element={<UserInfo />} ></Route>
        <Route path="/userinfo/info" element={<UserInfoInformation />}></Route>
        <Route path="/userinfo/address" element={<UserAddress />}></Route>
        <Route path="/userinfo/payment" element={<PaymentMethodspage />}></Route>
        <Route path="/userinfo/orders" element={<UserOrderPage />}></Route>
        <Route path="/userinfo/rating" element={<Ratingpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
