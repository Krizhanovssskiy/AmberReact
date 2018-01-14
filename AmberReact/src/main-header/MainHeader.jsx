import React from 'react'
import { Link } from 'react-router-dom';

export default class MainHeader extends React.Component {
    constructor () {
        super();
    }

    render() {
        return (
            <header className="main-header" id="scrol-top">
                <div className="sign-in-block">
                    <div className="container d-md-flex justify-content-md-between">
                        <form action="" className="d-flex justify-content-center">
                            <input className="search search-text" type="search" name="btnSch" placeholder="Search"/>
                            <button className="btn-search" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                        <div className="login-block d-flex align-items-center justify-content-center">
                            <a href="#" className="login extra-small-text">
                                <i className="fa fa-user-circle-o" aria-hidden="true" />
                                Login
                            </a>
                            <a href="#" className="register extra-small-text">
                                <i className="fa fa-pencil" aria-hidden="true" />
                                Register
                            </a>
                        </div>
                    </div>
                </div>
                <div className="logo-and-nav position-absolute">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark">

                            <h1 id="amber">
                                <a href="#" className="logo">
                                    <img src="./img/logo.png" alt="Amber"/>
                                </a>
                            </h1>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarColor03">
                                <ul className="nav navbar-nav ml-auto d-md-flex justify-content-sm-between">
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <Link to='/home' className="nav-link small-text ">Home</Link>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a href="" className="nav-link small-text">Typography</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <Link to='/blogGrid' className="nav-link small-text">Blog</Link>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <Link to='/blogSingle' className="nav-link small-text">Pages</Link>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a href="" className="nav-link small-text">Elements</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a href="" className="nav-link small-text">eCommerse</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a href="" className="nav-link small-text">Mega menu</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        );
    }

}