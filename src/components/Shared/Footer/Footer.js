import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container text-center'>
                <div className="row">
                    <div className='col-12 col-lg-10 mx-auto'>
                        <div className='row'>
                           
                            <div className='col-6 col-lg-3'>
                                <h4>Follow Us</h4>
                               <div className='row'>
                                   <div className='col-3 mx-auto'>
                                   <a  href="https://web.facebook.com/sabik.neajurrahman/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href="https://www.instagram.com/freelencersabik/" target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href=""><i class="fa-brands fa-youtube"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href="https://github.com/Sabik52"  target="_blank" ><i class="fa-brands fa-github"  ></i></a>
                                     
                                   </div>
                                  

                               </div>
                               
                            </div>
                            <p className='main-hero-para text-center w-100'>Copyright &copy;  Sabik. All rights reserved.</p>
                        </div>
                      
                    </div>

                </div>
            </div>
        </footer>

    
    );
};

export default Footer;