import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';
import logo from '../img/logo.png';
import { auth } from '../../firebase/firebase.utils';

const Navbar = ({ currentUser }) => (
    <header className="site-header border-bottom bg-white fixed-top py-lg-0 py-3">
        <div className="container">
            <nav className="navbar font-body-bold px-0 position-relative">
                <Link to="/" className="navbar-brand site-logo mr-0">
                    <img src={logo}
                        width="100px"
                        alt="Site Logo"
                        className="position-absolute"
                    />
                </Link>
                <div className="justify-content-end">
                    <div className="client-area mt-lg-0 mt-md-2 mt-sm-0 d-flex justify-content-center">
                    <Link to="/shop"
                        className="btn btn-outline-success font-body-bold ml-2">
                        SHOP
                    </Link>
                    <Link to="/register"
                        className="btn btn-outline-primary mx-2">
                        <i className="icon icon-user-plus"></i>
                    </Link>
                    {
                        currentUser?
                        <button 
                            onClick={() => auth.signOut()}
                            className="btn btn-outline-secondary mx-2">
                            <i className="icon icon-exit"></i>
                        </button>
                        :
                        <Link to="/signin"
                            className="btn btn-outline-primary mr-2">
                            <i className="icon icon-enter"></i>
                        </Link>
                    }
                    </div>
                </div>
            </nav>
        </div>
    </header>
)

export default Navbar