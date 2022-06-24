import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


function Footer() {
    return (
        <div className="App">
            <footer className="Head py-3 mt-5 mb-0">
            <Container className='px-5 pt-2'>
                <p class="text-center text-white">
                Copyright &copy; Talented Tenth 2022
                </p>
            </Container>
            </footer>
        </div>
    );
   }

   export default Footer;