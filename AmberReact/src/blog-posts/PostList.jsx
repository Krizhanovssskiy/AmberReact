import React from 'react';



export default class PostList extends React.Component {
    constructor () {
        super();
    }
    render () {
        const { img, name, header, numberOfPosts } = this.props;
        return(
            <li className="col">
                <a href="BlogGrid.html">
                    <img src={img} alt="road"/>
                    <p className="large-text">{name}</p>
                    <p className="extra-medium-text">{header}</p>
                    <div className="d-flex justify-content-between">
                        <p className="more-comment">Learn more</p>
                        <p className="more-comment">
                            <i className="fa fa-comments" aria-hidden="true"/>
                            {numberOfPosts}
                        </p>
                    </div>
                </a>
            </li>
        );
    }

}