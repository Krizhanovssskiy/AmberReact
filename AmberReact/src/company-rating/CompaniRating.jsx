import React from 'react';

/*import CircularProgressbar from 'react-circular-progressbar';
* /* <CircularProgressbar percentage={50} background={"red"} strokeWidth={12}  />*/


export default class CompaniRating extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <section className="company-expirience">
                <div className="container">
                    <div className="wrap-text-header">
                        <h3>Company expirience</h3>
                    </div>

                    <ul className="company-rating row justify-content-center">
                        <li className="years-development col-4">

                            <div id="circle1"></div>
                            <p className="big-text">500</p>
                            <p className="medium-text">years of web development</p>
                        </li>
                        <li className="last-results col-4">
                            <div id="circle2"></div>
                            <p className="big-text">25 000</p>
                            <p className="medium-text">results of the last
                                winter year</p>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </li>
                        <li className="budget col-4">
                            <div id="circle3"></div>
                            <p className="big-text">100 000</p>
                            <p className="medium-text">euros of the military
                                budget</p>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}


