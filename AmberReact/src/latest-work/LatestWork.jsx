import React  from 'react'

export default class PortfolioImg extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { photo, name, category } = this.props;
        return (
            <li className="portfolio-img col">
                <img src={photo} alt=""/>
                <div className="list-block position-absolute">
                    <div className="mr-auto">
                        <p className="extra-medium-text">{name}</p>
                        <p className="extra-small-text text-left">{category}</p>
                    </div>
                    <div className="ml-auto text-center">
                        <i className="fa fa-heart" aria-hidden="true"/>
                        <p className="extra-small-text">247</p>
                    </div>
                </div>
                <ul className="hover-link position-absolute">
                    <li className="d-flex justify-content-center align-items-center">
                        <a href="#">
                            <i className="fa fa-heart" aria-hidden="true"/>
                        </a>
                    </li>
                    <li className="d-flex justify-content-center align-items-center">
                        <a href="PortfolioGrid.html">
                            <i className="fa fa-search-plus" aria-hidden="true"/>
                        </a>
                    </li>
                    <li className="d-flex justify-content-center align-items-center">
                        <a href="#">
                            <i className="fa fa-wrench" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
}