import React from 'react'



const mainButton = [
    {
        id: 1,
        text: 'see features'
    },
    {
        id: 2,
        text: 'purchase now'
    },
    {
        id: 3,
        text: 'profile'
    }

];

export default class WelcomSection extends React.Component {
    constructor () {
        super();
    }

    render() {
        return (
            <section className="welcom-section">
                <div id="carouselExampleIndicators" className="position-static carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"/>

                    </ol>
                    <div className="carousel-inner position-absolute">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="../img/welcom-bg-slide-1.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../img/welcom-bg-slide-2.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../img/welcom-bg-slide-3.jpg" alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../img/welcom-bg-slide-4.jpg" alt="fourth slide"/>
                        </div>
                    </div>
                </div>
                <div className="container position-relative d-flex flex-column justify-content-center align-items-center text-center">
                    <h2>Creating a unique look.</h2>
                    <p className="h2">Never been easier.</p>
                    <div className="btn-wraper d-flex">
                        {/*{*/}
                            {/*mainButton.map(text => <MainButton key={text.id} text={text.text}/> )*/}
                        {/*}*/}
                        <a href="#" className="button-size small-text btn btn-outline-success">see features</a>
                        <a href="#" className="button-size small-text btn btn-outline-success">purchase now</a>
                    </div>
                </div>
            </section>

        );

}

}