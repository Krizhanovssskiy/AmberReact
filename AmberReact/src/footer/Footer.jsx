import React from 'react';


export default class Footer extends React.Component {
    constructor () {
        super();
    }
    render () {
        return(
            <footer>
                <div className="container">
                    <ul className="row footer-section">
                        <li className="col-lg-3 communication" >
                            <h4>Get in touch</h4>
                            <ul>
                                <li>
                                    <i className="text-turquoise fa fa-flag" aria-hidden="true"/>
                                    <p className="small-text">Address:<span class="text-gray"> 321 Street Name, United Kingdom, London </span></p>
                                </li>
                                <li>
                                    <i className="text-turquoise fa fa-phone" aria-hidden="true"></i>
                                    <p className="small-text">Phone:<span class="text-gray"> +7 998 71 150 30 20</span></p>
                                </li>
                                <li>
                                    <i className="text-turquoise fa fa-envelope" aria-hidden="true"></i>
                                    <p className="small-text">Email:<span class="text-gray"> info@ambertheme.com</span></p>
                                </li>
                            </ul>
                            <img src="img/maps.jpg" alt=""/>
                        </li>
                        <li className="col-lg-3 twitter-wrap">
                            <h4>Latest tweets</h4>
                            <ul>
                                <li>
                                    <i className="text-turquoise fa fa-twitter" aria-hidden="true"></i>
                                    <div>
                                        <p className="small-text">CMS Masters And Their Best Web Design Tools
                                            <span className="text-turquoise">#bestwebdesigntools #webdesign</span>
                                        </p>
                                        <p className="text-gray">— about 12 min ago</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="text-turquoise fa fa-twitter" aria-hidden="true"></i>
                                    <div>
                                        <p className="small-text">WOOCOMMERCE functionality added!!!
                                            See Industrial theme become even powerful! -
                                            <span className="text-turquoise">bit.ly/industrial-wp</span>
                                        </p>
                                        <p className="text-gray">— about 47 days ago</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="text-turquoise fa fa-twitter" aria-hidden="true"></i>
                                    <p className="small-text">CMS Masters And Their Best Web Design Tools
                                        <span className="text-turquoise">#bestwebdesigntools #webdesign</span>
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li className="col-lg-3 social-link">
                            <h4>Follow us</h4>
                            <ul className="social-link-list">
                                <li>
                                    <a href="#">
                                        <i className="facebook fa fa-facebook" aria-hidden="true"></i>
                                        <p className="small-text">Like us on Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="twitter-link fa fa-twitter" aria-hidden="true"></i>
                                        <p className="small-text">Follow us on Twitter</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="youtube fa fa-youtube" aria-hidden="true"></i>
                                        <p className="small-text">Watch videos on YouTube</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="instagram fa fa-instagram" aria-hidden="true"></i>
                                        <p className="small-text">Friend us on Instagram</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="pinterest fa fa-pinterest" aria-hidden="true"></i>
                                        <p className="small-text">Repin on Pinterest</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="col-lg-3 posts">
                            <h4>Popular posts</h4>
                            <ul>
                                <li>
                                    <p className="small-text">September, 30</p>
                                    <p className="small-text text-turquoise">Candy canes dragée pudding. Donut
                                        cheesecake I love chocolate icing </p>
                                </li>
                                <li>
                                    <p className="small-text">April, 22</p>
                                    <p className="small-text text-turquoise">Muffin croissant cookie sesame snaps.
                                        Ice cream donut cookie gingerbread</p>
                                </li>
                                <li>
                                    <p className="small-text">May, 12</p>
                                    <p className="small-text text-turquoise">Cotton candy muffin tart gummies candy
                                        danish liquorice chupa chups tootsie roll</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="pageapp row">
                        <div className="avtor">
                            <p className="small-text">© 2014 StylemixThemes. All rights reserved.</p>
                            <p className="small-text">Powered by WordPress.</p>
                        </div>
                        <a href="#scrol-top" className="button-size small-text btn btn-outline-success">
                            Back to top of page
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

}