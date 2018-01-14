import React from 'react';
import WelcomSection from '../welcom-section/WelcomSection.jsx';
import StealTheMoon from '../steal-the-moon/StealTheMoon.jsx';
import LatestWorks from '../latest-work/LatestWorks.jsx';
import WordpressBlock from '../wordpress-theme/WordpressBlock.jsx';
import SuperbFeatures from '../superb-features/SuperbFeatures.jsx'
import BlockquoteSection from '../blockquote-section/BlockquoteSection.jsx';
import CompaniRating from '../company-rating/CompaniRating.jsx';
import BlogPosts from '../blog-posts/BlogPosts.jsx';
import OurTaem from '../our-team/OurTaem.jsx';


export default class Home extends React.Component {
        constructor () {
            super();
        }
        render() {
            return(
                <div>
                    <WelcomSection />

                    <StealTheMoon />

                    <LatestWorks />

                    <WordpressBlock />

                    <SuperbFeatures />

                    <BlockquoteSection />

                    <BlogPosts />

                    <CompaniRating />

                    <OurTaem />
                </div>
            );

        }
}