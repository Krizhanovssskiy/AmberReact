import React from 'react';


export default class FeaturesList extends React.Component {
    constructor () {
        super();
    }
    render() {
        const { id, name, text } = this.props;
        return(
            <li className="col-md-6">
                <p className="large-text">{name}</p>
                <p className="extra-medium-text">{text}</p>
            </li>
        );
    }
}