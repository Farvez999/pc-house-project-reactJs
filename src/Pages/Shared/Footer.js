import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.ico'

const Footer = () => {
    return (
        <footer className="p-10 text-base-content mt-12">
            <div className="footer">
                <div>
                    <div className="avatar">
                        <div className="w-10 rounded">
                            <img src={logo} alt="Tailwind-CSS-Avatar-component" />

                        </div>
                    </div>
                    <p>PC House Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-24'>
                <p>Copyright © 2022 - All right reserved by PC House Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;