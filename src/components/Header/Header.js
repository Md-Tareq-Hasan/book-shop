import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userCreate } from '../../App';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light container pl-0 pe-0 ">
                <div className="container-fluid p-0">
                    <a className="navbar-brand nav-brand" href="#">ONNOROKOM BOOKSHOP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto nav-link">
                            <Link to="/home">Home</Link>
                            <Link to="/order">Orders</Link>
                            <Link to="/admin">Admin</Link>
                            <Link to="/checkout">Checkout</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;