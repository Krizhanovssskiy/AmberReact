import React from 'react'

export default class StealTheMoon extends React.Component {
    constructor () {
        super();
    }
    render() {
        return(
            <section className="steal-the-moon">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="wrap-text-header">
                        <h3>Steal of the month</h3>
                    </div>
                    <p className="medium-text">That we can tuck in our
                        children at night and know that they are fed
                        and clothed and safe from harm. Our trials
                        and triumphs became at once unique and universal.</p>
                    <a href="#" className="button-size small-text btn btn-outline-success">purchase now</a>
                </div>
            </section>
        );
    }
}