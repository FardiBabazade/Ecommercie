import React from 'react'
import Banner from '../components/Banner/Banner.jsx';
import Newproducts from '../components/Newproducts/Newproducts.jsx';
import Sliderhome from '../components/Slider/Sliderhome.jsx';
import Topselling from '../components/Topselling/Topselling.jsx';
import Layout from "../main/Layout.jsx"

 function Home() {
    return (
            <Layout>
                <Sliderhome/>
                <Newproducts/>
                <Banner/>
                <Topselling/>
            </Layout>
    )
}

export default Home;