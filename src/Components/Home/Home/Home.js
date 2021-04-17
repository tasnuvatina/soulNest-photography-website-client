import React from 'react';
import Clients from '../Clients/Clients';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Photoes from '../Photoes/Photoes';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';
import VedioPage from '../VedioPage/VedioPage';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Photoes></Photoes>
            <VedioPage></VedioPage>
            <Services></Services>
            <Clients></Clients>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;