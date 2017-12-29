import React, { Component } from 'react';
import logo from './logo.svg';
import PortfolioImg from './latest-work/LatestWork';
import MainHeader from './main-header/MainHeader';
import WelcomSection from './welcom-section/WelcomSection.jsx';
import './App.css';

const latestWorks = [
    {
        id: 1,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design'
    },
    {
        id: 2,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design, erwre'
    },
    {
        id: 3,
        photo: '../img/290x290.jpg',
        name: 'Marketing materials and branding',
        category: 'Photography, Web Design, ewrtwertwef'
    }
];



class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="main-header" id="scrol-top">
             <MainHeader/>
          </header>
          <section className="welcom-section">
              <WelcomSection/>
          </section>
          <section className="steal-the-moon">
              <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="wrap-text-header">
                      <h3>Steal of the month</h3>
                  </div>
                  <p className="medium-text">That we can tuck in our
                      children at night and know that they are fed
                      and clothed and safe from harm. Our trials
                      and triumphs became at once unique and universal.</p>
                  <a href="#" className="button-size small-text btn btn-outline-success">purchase now</a>
              </div>
          </section>
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
                          latestWorks.map(item => <PortfolioImg key={item.id} photo={item.photo} name={item.name} category={item.category} />)
                      }
                  </ul>
              </div>
          </section>
          <section className="wordpress-theme">
              <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
                  <p className="large-text text-center">Amber is the most metrolly WordPress theme ever created.</p>
                  <a href="" className="button-size small-text btn btn-outline-success">
                      purchase now
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
              </div>
          </section>
          <section className="superb-features">
              <div className="container">
                  <div className="wrap-text-header">
                      <h3>Superb features</h3>
                  </div>
                  <ul className="features-list row">
                      <li className="col-md-6">
                          <p className="large-text">Brilliant creative design</p>
                          <p className="extra-medium-text">Ah, well! It means much the
                              same thing, said the Duchess, digging her  sharp
                              little chin into Alice's shoulder as she added, and
                              the moral  of that is m-dash.</p>
                      </li>
                      <li className="col-md-6">
                          <p className="large-text">On mouse over title</p>
                          <p className="extra-medium-text">Then they both bowed low,
                              and their curls got entangled together. Alice
                              laughed so much at this, that she had to run back
                              into the wood for fear of their hearing her.</p>
                      </li>
                      <li className="col-md-6">
                          <p className="large-text">Incredible documentation</p>
                          <p className="extra-medium-text">Alice went timidly up to
                              the door, and knocked. 'There's no sort of use in
                              knocking,' said the Footman, 'and that for two reasons.</p>
                      </li>
                      <li class="col-md-6">
                          <p className="large-text">Responsive & retina ready</p>
                          <p className="extra-medium-text">Alice went timidly up to
                              the door, and knocked. 'There's no sort of use in
                              knocking,' said the Footman, 'and that for two reasons.
                              First, because I'm on the same side.</p>
                      </li>
                  </ul>
              </div>
          </section>
          <section className="blockquote-section position-relative">
              <div id="carouselExampleIndicator" className="position-static carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicator" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner position-relative">
                      <div className="carousel-item active">
                          <img className="../d-block w-100" src="img/blockout-bg-1.jpg" alt="First slide"/>
                              <div className="container position-absolute d-flex flex-column justify-content-center align-items-center text-center">
                                  <blockquote className="large-text">Thereby, the whale commanders are
                                      enabled to recognise each other upon the ocean,
                                      even at considerable distances and with no
                                      small facility.</blockquote>
                                  <p className="extra-medium-text">— Moby-Dick, Herman Melville</p>
                              </div>
                      </div>
                      <div className="carousel-item">
                          <img className="../d-block w-100" src="img/blockout-bg-2.jpg" alt="Second slide"/>
                              <div className="container position-absolute d-flex flex-column justify-content-center align-items-center text-center">
                                  <blockquote className="large-text">Thereby, the whale commanders are
                                      enabled to recognise each other upon the ocean,
                                      even at considerable distances and with no
                                      small facility.</blockquote>
                                  <p className="extra-medium-text">— Moby-Dick, Herman Melville</p>
                              </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="blog-posts">
              <div className="container">
                  <div className="wrap-text-header">
                      <h3>Latest blog posts</h3>
                  </div>
                  <ul className="posts-list row justify-content-center">
                      <li className="col">
                          <a href="BlogGrid.html">
                              <img src="../img/290x220.jpg" alt="road"/>
                                  <p className="large-text">Runway to Red Carpet: Awards Season</p>
                                  <p className="extra-medium-text">Her father worked on oil rigs
                                      and farms that through most of the Depression. But it
                                      is a new story that has seared into my genetic.</p>
                                  <div className="d-flex justify-content-between">
                                      <p className="more-comment">Learn more</p>
                                      <p className="more-comment">
                                          <i class="fa fa-comments" aria-hidden="true"></i>
                                          450
                                      </p>
                                  </div>
                          </a>
                      </li>
                      <li className="col">
                          <a href="BlogGrid.html">
                              <img src="../img/290x220.jpg" alt="road"/>
                                  <p className="large-text">Runway to Red Carpet: Awards Season</p>
                                  <p className="extra-medium-text">Her father worked on oil rigs
                                      and farms that through most of the Depression. But it
                                      is a new story that has seared into my genetic.</p>
                                  <div className="d-flex justify-content-between">
                                      <p className="more-comment">Learn more</p>
                                      <p className="more-comment">
                                          <i className="fa fa-comments" aria-hidden="true"></i>
                                          450
                                      </p>
                                  </div>
                          </a>
                      </li>
                      <li className="col">
                          <a href="BlogGrid.html">
                              <img src="../img/290x220.jpg" alt="road"/>
                                  <p className="large-text">Runway to Red Carpet: Awards Season</p>
                                  <p className="extra-medium-text">Her father worked on oil rigs
                                      and farms that through most of the Depression. But it
                                      is a new story that has seared into my genetic.</p>
                                  <div className="d-flex justify-content-between">
                                      <p className="more-comment">Learn more</p>
                                      <p className="more-comment">
                                          <i className="fa fa-comments" aria-hidden="true"></i>
                                          450
                                      </p>
                                  </div>
                          </a>
                      </li>
                  </ul>
              </div>
          </section>
          <section className="company-expirience">
              <div className="container">
                  <div className="wrap-text-header">
                      <h3>Company expirience</h3>
                  </div>
                  <ul className="company-rating row justify-content-center">
                      <li className="years-development col-4">
                          <div id="circle1"></div>
                          <p className="big-text">500</p>
                          <p className="medium-text">years of web development</p>
                      </li>
                      <li className="last-results col-4">
                          <div id="circle2"></div>
                          <p className="big-text">25 000</p>
                          <p className="medium-text">results of the last
                              winter year</p>
                          <div className="dots">
                              <div></div>
                              <div></div>
                              <div></div>
                          </div>
                      </li>
                      <li className="budget col-4">
                          <div id="circle3"></div>
                          <p className="big-text">100 000</p>
                          <p className="medium-text">euros of the military
                              budget</p>
                          <div className="dots">
                              <div></div>
                              <div></div>
                              <div></div>
                          </div>
                      </li>
                  </ul>

              </div>
          </section>
          <section className="our-team">
              <div className="container">
                  <div className="wrap-text-header">
                      <h3>Our team</h3>
                  </div>
                  <ul className="our-team-list row text-center justify-content-center">
                      <li className="col-lg-3">
                          <div className="block-img">
                              <img src="../img/210x280.jpg" alt=""/>
                                  <div className="block-hover">
                                      <div className="block-hover-container">
                                          <div>
                                              <p className="extra-medium-text">Manny Delgado</p>
                                              <p className="small-text">a little boy</p>
                                          </div>
                                          <p className="small-text">Be who you are and say what
                                              you feel, because those who mind don't matter.</p>
                                      </div>
                                  </div>
                          </div>
                          <a href="#" className="button-size small-text btn btn-outline-success">profile</a>
                      </li>
                      <li className="col-lg-3">
                          <div className="block-img">
                              <img src="../img/210x280.jpg" alt=""/>
                                  <div className="block-hover">
                                      <div className="block-hover-container">
                                          <div>
                                              <p className="extra-medium-text">Luke Dunphy</p>
                                              <p className="small-text">NATO representative</p>
                                          </div>
                                          <p className="small-text">Be who you are and say what
                                              you feel, because those who mind don't matter.</p>
                                      </div>
                                  </div>
                          </div>
                          <a href="#" className="button-size small-text btn btn-outline-success">profile</a>
                      </li>
                      <li className="col-lg-3">
                          <div className="block-img">
                              <img src="../img/210x280.jpg" alt=""/>
                                  <div className="block-hover">
                                      <div className="block-hover-container">
                                          <div>
                                              <p className="extra-medium-text">Mitchell Pritchett</p>
                                              <p className="small-text">ecology lawer</p>
                                          </div>
                                          <p className="small-text">Be who you are and say what
                                              you feel, because those who mind don't matter.</p>

                                      </div>
                                  </div>
                          </div>
                          <a href="#" className="button-size small-text btn btn-outline-success">profile</a>
                      </li>
                      <li className="col-lg-3">
                          <div className="block-img">
                              <img src="../img/210x280.jpg" alt=""/>
                                  <div className="block-hover">
                                      <div className="block-hover-container">
                                          <div>
                                              <p className="extra-medium-text">Luke Dunphy</p>
                                              <p className="small-text">NATO representative</p>
                                          </div>
                                          <p className="small-text">Be who you are and say what
                                              you feel, because those who mind don't matter.</p>
                                      </div>
                                  </div>
                          </div>
                          <a href="#" className="button-size small-text btn btn-outline-success">profile</a>
                      </li>
                  </ul>
              </div>
          </section>
          <footer>
              <div className="container">
                  <ul className="row footer-section">
                      <li className="col-lg-3 communication" >
                          <h4>Get in touch</h4>
                          <ul>
                              <li>
                                  <i className="text-turquoise fa fa-flag" aria-hidden="true"></i>
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
      </div>
    );
  }
}

export default App;
