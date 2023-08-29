import React from 'react'
import Newproducts from '../components/Newproducts/Newproducts.jsx';
import Sliderhome from '../components/Slider/Sliderhome.jsx';
import Layout from "../main/Layout.jsx"

 function Home() {
    return (
            <Layout>
                <Sliderhome/>
                <Newproducts/>
            </Layout>
    )
}

export default Home;