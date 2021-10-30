import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink } from 'react-router-hash-link';

import { FaLinkedin, FaGithub , FaTwitter} from 'react-icons/fa';
import { MdMail, MdPhone} from 'react-icons/md';
// import logo from '../images/My-logo4.ico'
import logo from '../images/logoB.png'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} alt='logo' />
                <h1><HashLink smooth to="/#start" className="h1_links">Boniface Kibet</HashLink></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> bkcherotwo@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><HashLink smooth to="/#about" className="links">About</HashLink></li>
                    <li className="sidebar-nav-items"><HashLink to="/#education" className="links" >My Journey</HashLink></li>
                    <li className="sidebar-nav-items"><HashLink smooth to="/#interest" className="links">Interest</HashLink></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons">
                           
                            <a 
                                href="https://www.linkedin.com/in/cherotwokibet/" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-linkedin fa-lg"
                            ><FaLinkedin size={30} title = 'LinkedIn'/> </a>
                        </li>
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="https://github.com/cherotwokibet" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-github fa-lg"
                            ><FaGithub size={30} title = 'Github'/> </a>
                        </li>
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="https://twitter.com/kibetboniface" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // className="fa fas fa-twitter fa-lg"
                            ><FaTwitter size={30} title = 'Twitter' /> </a>
                        </li>
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="mailto:bkcherotwo@gmail.com" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-envelope fa-lg"
                            ><MdMail size={30} title = 'Gmail'/> </a>
                        </li>
                        <li className="sidebar-nav-icons">
                            <a 
                                href="tel: +254786778004" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-envelope fa-lg"
                            ><MdPhone size={30} fontWeight='bold' title = '+254786778004'/> </a>
                        </li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar