import React from 'react'

export default class MainHeader extends React.Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div>
                <div className="sign-in-block">
                    <div className="container d-md-flex justify-content-md-between">
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
                                        <a className="nav-link small-text " href="#amber">Home</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">Typography</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">Elements</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">eCommerse</a>
                                    </li>
                                    <li className="nav-item hvr-sweep-to-bottom">
                                        <a className="nav-link small-text" href="#">Mega menu</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }

}