import {  useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
import Contact from './component/Contact';
import Footer from './component/Fotter';
import Hero from './component/Hero';
import Portfolios from './component/Portfolios';
import About from './component/About';
import Services from './component/Services';



export default function Home() {

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            const scrollBtn = document.querySelector('.scroll-top');
            
            if (window.scrollY > 100) {
                nav.classList.add('sticky');
                scrollBtn.classList.add('show');
            } else {
                nav.classList.remove('sticky');
                scrollBtn.classList.remove('show');
            }
        };

        const handleScrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        document.querySelector('.scroll-top').addEventListener('click', handleScrollTop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.scroll-top')?.removeEventListener('click', handleScrollTop);
        };
    }, []);

    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    },[])

    return (
        <>
            <div className="loading">
                <div id="gif">
                    <img src="https://img1.picmix.com/output/stamp/thumb/5/3/1/9/2589135_7c843.gif" alt="" />
                </div>
            </div>
            <nav>
                <div className="logo">
                    <img src="./sdvdv.png" alt="NICHAN-LABS" />
                </div>
                <div className="nav-links">
                    <a href="#home">Accueil</a>
                    <a href="#about">À Propos</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
           <Hero/>
            {/* about Section */}
           <About />
             {/* Services Section */}
            <Services/>
             {/* Portfolio Section */}
             <Portfolios />

             {/* Contact Section */}
            <Contact/>
             {/* Footer Section */}
            <Footer/>
            <button id="scroll-top" className="scroll-top" aria-label="Scroll to top">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </>
    );
}