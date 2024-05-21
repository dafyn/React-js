import React from 'react';
import NavbarComponent from '../Components/NavBar';
import FooterComponent from '../Components/Footer';
import About from '../Pages/AboutUs';

const AboutLayout = () => {
    return (
        <div>
            <NavbarComponent/>
            <About />
            <FooterComponent />
        </div>
    );
}

export default AboutLayout ;