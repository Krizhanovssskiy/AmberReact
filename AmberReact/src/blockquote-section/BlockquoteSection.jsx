import React from 'react'

export default class BlockquoteSection extends React.Component {
    constructor () {
        super();
    }
    render () {
        return (
            <section className="blockquote-section position-relative">
                <div id="carouselExampleIndicator" className="position-static carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicator" data-slide-to="1"/>
                    </ol>
                    <div className="carousel-inner position-relative">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="../img/blockout-bg-1.jpg" alt="First slide"/>
                            <div className="container position-absolute d-flex flex-column justify-content-center align-items-center text-center">
                                <blockquote className="large-text">Thereby, the whale commanders are
                                    enabled to recognise each other upon the ocean,
                                    even at considerable distances and with no
                                    small facility.</blockquote>
                                <p className="extra-medium-text">— Moby-Dick, Herman Melville</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../img/blockout-bg-2.jpg" alt="Second slide"/>
                            <div className="container position-absolute d-flex flex-column justify-content-center align-items-center text-center">
                                <blockquote className="large-text">Thereby, the whale commanders are
                                    enabled to recognise each other upon the ocean,
                                    even at considerable distances and with no
                                    small facility.</blockquote>
                                <p className="extra-medium-text">— Moby-Dick, Herman Melville</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}


}