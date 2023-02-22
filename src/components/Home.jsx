import React from 'react';
import Navbar from '../Layouts/Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Service from './Services';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Hireme from './Hireme';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Service />
            <Projects />
            <Testimonials />
            <Hireme />
            <Contact />
            <Footer></Footer>
        </div>
    );
};

export default Home;