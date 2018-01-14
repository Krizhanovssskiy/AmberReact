import React from 'react';
import PostList from '../blog-posts/PostList.jsx';

const post = [
    {
        id: 1,
        img: '../img/290x220.jpg',
        name: 'Runway to Red Carpet: Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '40'
    },
    {
        id: 2,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 3,
        img: '../img/290x220.jpg',
        name: 'Carpet: Awards Season Runway to Red ',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '200'
    },
    {
        id: 4,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 5,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 6,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 7,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 8,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
    {
        id: 9,
        img: '../img/290x220.jpg',
        name: 'Runway Carpet Awards Season',
        header: 'Her father worked on oil rigs\n' +
        'and farms that through most of the Depression. But it\n' +
        'is a new story that has seared into my genetic.',
        numberOfPosts: '450'
    },
];

export default class BlogGrid extends React.Component {
    constructor () {
        super();
    }
    render() {
        return(
            <div>
                <section className="welcom-portfolio">
                    <div id="carouselExampleIndicators" className="carousel" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/header-img-1680x300.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/WATCHES.jpg" alt="Second slide" />
                            </div>
                        </div>
                    </div>
                    <div className="title-page">
                        <div className="container">
                            <h3>Portfolio grid gallery</h3>
                            <ul className="footer d-flex justify-content-lg-between flex-column flex-md-row">
                                <li className="link-left">
                                    <ul className="row justify-content-between align-items-end">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                                by Alex Poushkin
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                September 31
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                12 Comments
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-right">
                                    <ul className="row justify-content-between align-items-end">
                                        <li>
                                            <a href="index.html">Home<span>/</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Shortcodes<span>/</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Typography<span>/</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="blog-posts">
                    <div className="container">
                        <ul className="posts-list row justify-content-center">
                            {
                                post.map(pos => <PostList key={pos.id} img={pos.img} name={pos.name} header={pos.header} numberOfPosts={pos.numberOfPosts}  />)
                            }
                        </ul>
                        <ul className="pagination row justify-content-between align-items-center">
                            <li>
                                <a href="#" className="active">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li>
                                <a href="#">6</a>
                            </li>
                            <li>
                                <a href="#">7</a>
                            </li>
                            <li>
                                <a href="#">...</a>
                            </li>
                            <li>
                                <a href="#">2015</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}