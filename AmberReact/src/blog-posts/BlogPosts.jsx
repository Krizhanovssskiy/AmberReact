import React from 'react';
import PostList from './PostList.jsx';

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
    }
];

export default class BlogPosts extends React.Component {
    constructor () {
        super();
    }
    render() {
        return(
            <section className="blog-posts">
                <div className="container">
                    <div className="wrap-text-header">
                        <h3>Latest blog posts</h3>
                    </div>
                    <ul className="posts-list row justify-content-center">
                        {
                            post.map(pos => <PostList key={pos.id} img={pos.img} name={pos.name} header={pos.header} numberOfPosts={pos.numberOfPosts}  />)
                        }
                    </ul>
                </div>
            </section>
        );
    }

}