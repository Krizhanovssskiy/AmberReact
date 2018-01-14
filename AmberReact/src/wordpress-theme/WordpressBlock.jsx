import React from 'react'

export default class WordpressBlock extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <section className="wordpress-theme">
                <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
                    <p className="large-text text-center">Amber is the most metrolly WordPress theme ever created.</p>
                    <a href="" className="button-size small-text btn btn-outline-success">
                        purchase now
                        <i className="fa fa-chevron-right" aria-hidden="true"/>
                    </a>
                </div>
            </section>
        );
    }
}