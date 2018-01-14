import React from 'react';
import PortfolioImg from './PortfolioImg.jsx';

const latestWorks = [
    {
        id: 1,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design',
        number: '247'
    },
    {
        id: 2,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design, erwre',
        number: '24'
    },
    {
        id: 3,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design, ewrtwertwef',
        number: '308'
    }
];

export default class LatestWorks extends React.Component {
    constructor () {
        super();
    }
    render() {
        return (
            <section className="latest-works">
                <div className="container d-flex flex-column justify-content-center align-items-center align-middle text-center">
                    <div className="wrap-text-header">
                        <h3>Latest works</h3>
                    </div>
                    <p className="medium-text">That we can tuck in our
                        children at night and know that they are fed
                        and clothed and safe from harm. Our trials
                        and triumphs became at once unique and universal.</p>
                    <ul className="portfolio-list row justify-content-center">
                        {
                            latestWorks.map(item => <PortfolioImg key={item.id} photo={item.photo} name={item.name} category={item.category} number={item.number}/>)
                        }
                    </ul>
                </div>
            </section>
        );
    }
}