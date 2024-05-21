import React from 'react';
import NavbarComponent from '../Components/NavBar';
import FooterComponent from '../Components/Footer';
import Home from '../Pages/Home';
import HeaderComponent from '../Components/Header';
// import { Layout } from 'antd';

// const { Content } = Layout;

const HomeLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <NavbarComponent/>
                <Home />
                    <FooterComponent />
        </div>
    );

}

export default HomeLayout;