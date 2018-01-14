import React from 'react';


export default class ListOursTeam extends React.Component {
    constructor () {
        super();
    }
        render () {
        const { id, img, name, subtitle, text } = this.props;
        return(
            <li className="col-lg-3">
                <div className="block-img">
                    <img src={img} alt=""/>
                    <div className="block-hover">
                        <div className="block-hover-container">
                            <div>
                                <p className="extra-medium-text">{name}</p>
                                <p className="small-text">{subtitle}</p>
                            </div>
                            <p className="small-text">{text}</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="button-size small-text btn btn-outline-success">profile</a>
            </li>
        );
    }

}