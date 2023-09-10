import React from 'react'
import Layout from '../main/Layout';
import OrderForm from '../components/Order/OrderForm.jsx';
// import RezervationCardConfirm from '../components/RezervationCard/RezervationCardConfirm';

function OrderPage() {
   return (
      <Layout>
         <OrderForm />
      </Layout>
   )
}

export default OrderPage;