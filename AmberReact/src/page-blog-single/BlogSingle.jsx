import React from 'react';


export default class BlogSingle extends React.Component {
    constructor () {
        super();
    }
    render () {
            return(
                <div>
                    <section className="welcom-portfolio">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="../img/header-img-1680x300.jpg" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../img/WATCHES.jpg" alt="Second slide"/>
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
                                                <a href="#comments-section">
                                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                    12 Comments
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="link-right">
                                        <ul className="row justify-content-between align-items-end">
                                            <li>
                                                <a href="#">Home<span>/</span></a>
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
                    <section className="blog-single">
                        <div className="container row">
                            <main className="col-12 col-lg-9">
                                <img src="../img/moment-690x520.jpg" alt="moment" className="big-img"/>
                                    <p className="medium-text">These are the Americans that I know</p>
                                    <p className="extra-medium-text">No health care? The market
                                        will fix it. I have come here to seek a new beginning
                                        between the United States and Muslims around the
                                        world; one based upon mutual interest and mutual
                                        respect; and one based upon the truth that America
                                        and Islam are not exclusive, and need not be in
                                        competition. On economic development, we will create
                                        a new corps of business volunteers to partner with
                                        counterparts in Muslim-majority countries.</p>
                                    <blockquote>
                                        <p className="large-text">Thereby, the whale commanders
                                            are enabled to recognise each other upon the
                                            ocean, even at considerable distances and with
                                            no small facility.</p>
                                        <p className="extra-medium-text">— Moby-Dick, Herman Melville</p>
                                    </blockquote>
                                    <p className="extra-medium-text">Tell that to the proud auto workers
                                        at a Michigan plant who, after they found out it was closing,
                                        kept showing up every day and working as hard as ever, because
                                        they knew there were people who counted on the brakes that
                                        they made. </p>
                                    <p className="medium-text">Michigan plant who, after they found</p>
                                    <p className="extra-medium-text">It was closing, kept showing up
                                        every day and working as hard as ever, because they knew
                                        there were people who counted on the brakes that they made.
                                        Michigan plant who, after they found out it was closing,
                                        kept showing up every day and working as hard as ever,
                                        because. Tell that to the proud auto workers at a Michigan
                                        plant who, after they found out it was closing, kept showing
                                        up every day and working as hard as ever, because they knew
                                        there were people who counted on the brakes that they made.</p>
                                    <p className="extra-medium-text">Michigan plant who, after they found
                                        out it was closing, kept showing up every day and working as
                                        hard as ever, because they knew there were people who counted
                                        on the brakes that they made. Michigan plant who, after they
                                        found out it was closing, kept showing up every day and
                                        working as hard as ever, because.</p>
                                    <ul className="list-img d-flex flex-wrap justify-content-center justify-content-md-around">
                                        <li>
                                            <img src="../img/210x160.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <img src="../img/210x160.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <img src="../img/210x160.jpg" alt=""/>
                                        </li>
                                    </ul>
                                    <p className="extra-medium-text">Because they knew there were people
                                        who counted on the brakes that they made. Michigan plant who,
                                        after they found out it was closing, kept showing up every
                                        day and working as hard as ever, because they knew there
                                        were people who counted on the brakes that they made.
                                        Michigan plant who, after they found out it was closing,
                                        kept showing up every day and working as hard as ever,
                                        because.</p>
                                    <p className="extra-medium-text">Tell that to the proud auto
                                        workers at a Michigan plant who, after they found out
                                        it was closing, kept showing up every day and working
                                        as hard as ever, because they knew there were people
                                        who counted on the brakes that they made.</p>
                                    <ul className="list-tags d-flex flex-wrap justify-content-center justify-content-md-around">
                                        <li>
                                            <i className="fa fa-tags" aria-hidden="true"></i>
                                            <span className="extra-medium-text">Tags:</span>
                                        </li>
                                        <li>
                                            <a href="#" className="small-text">amber,</a>
                                        </li>
                                        <li>
                                            <a href="#" className="small-text">dance,</a>
                                        </li>
                                        <li>
                                            <a href="#" className="small-text">fashion,</a>
                                        </li>
                                        <li>
                                            <a href="#" className="small-text">sultan,</a>
                                        </li>
                                        <li>
                                            <a href="#" className="small-text">onmouseover tag</a>
                                        </li>
                                    </ul>
                                    <p className="medium-text">Related posts</p>
                                    <ul className="related-posts d-flex flex-wrap justify-content-center justify-content-md-between">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                                                <p className="small-text">
                                                    <span>June 24</span>
                                                </p>
                                                <p className="small-text">The hope of a young naval
                                                    lieutenant bravely patrolling</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                                                <p className="small-text">
                                                    <span>August 8</span>
                                                </p>
                                                <p className="small-text">Politicians routinely exploited
                                                    fears of crime Christian Coalition</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                                                <p className="small-text">
                                                    <span>August 13</span>
                                                </p>
                                                <p className="small-text">There was even a time when the
                                                    Christian Coalition determined that its number one </p>
                                            </a>
                                        </li>
                                    </ul>


                            </main>
                            <aside className="col-12 col-lg-3">
                                <ul className="sidebar">
                                    <li>
                                        <p className="medium-text">Categories</p>
                                        <ul className="hover-text">
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                                    Creative portfolio
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                                    Onmouseover category
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                                    Amber golden
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                                    Amsterdam fight gear
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                                    Creamy cucumber
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="medium-text">Recent comments</p>
                                        <ul className="hover-text">
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <span>Igor Ligay on</span>
                                                    <p>The hope of a young naval lieutenant bravely patrolling</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <span>Farhad Yusupov on</span>
                                                    <p>Politicians routinely exploited fears of crime</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="small-text">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <span>John Doe on</span>
                                                    <p>There was even a time when the Christian Coalition determined that its number one</p>
                                                </a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        <p className="medium-text">Latest works</p>
                                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src="../img/210x160.jpg" alt="First slide"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="../img/1-210x160.jpg" alt="Second slide"/>
                                                </div>
                                            </div>
                                            <div className="btn-slide d-flex justify-content-center">
                                                <a className="btn-left carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                    <span className="btn-bg-left carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="btn-right carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                    <span className="btn-bg-right carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="medium-text">Tag cloud</p>
                                        <ul className="button-wraper d-flex flex-wrap">
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">bad boy</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">winter</button>
                                            </li>
                                            <li>
                                                <button className="small-text button-size btn btn-outline-success">is coming</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">south</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">mouseover</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">asia</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">surfing</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">iceland</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">she</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">china</button>
                                            </li>
                                            <li>
                                                <button className="button-size small-text btn btn-outline-success">daytona</button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </section>
                    <section className="comments-section" id="comments-section">
                        <div className="container">
                            <div className="comments-section col-12 col-sm-9">
                                <p className="medium-text">Add comment</p>
                                <form action="" className="row flex-wrap justify-content-between">
                                    <div className="col">
                                        <p className="extra-medium-text">Name</p>
                                        <input type="text" name="userName"/>
                                    </div>
                                    <div className="col">
                                        <p className="extra-medium-text">Email</p>
                                        <input type="email" name="eserEmail"/>
                                    </div>
                                    <div className="col">
                                        <p className="extra-medium-text">Website <span class="small-text">(optional)</span></p>
                                        <input type="text" name="website"/>
                                    </div>
                                    <div className="col-12">
                                        <p className="extra-medium-text">Message</p>
                                        <textarea id="comments" name="comments"/>
                                    </div>
                                    <button type="submit" name="comment" className="ml-auto button-size small-text btn btn-outline-success">add comment</button>
                                </form>
                                <p className="medium-text">24 Comments</p>
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment-wraper">
                                            <p className="extra-medium-text"><span>Administrator</span></p>
                                            <p className="small-text">September 17, 2013 @ 1:38 pm</p>
                                            <p className="extra-medium-text">Small batch
                                                sartorial, single-origin coffee food truck tousled
                                                sed swag hella synth bitters next level consectetur
                                                Helvetica twee. Craft beer ea tofu sint reprehenderit
                                                cornhole, occaecat put a bird on it single-origin
                                                coffee Tonx. Small batch 3 wolf moon ad, adipisicing
                                                fap cornhole.</p>
                                            <div className="hover">
                                                <a href="#" className="extra-medium-text">
                                                    <span>Reply</span>
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="comments-list">
                                            <li>
                                                <div className="comment-wraper">
                                                    <p className="extra-medium-text"><span>Administrator</span></p>
                                                    <p className="small-text">September 17, 2013 @ 1:38 pm</p>
                                                    <p className="extra-medium-text">Small batch
                                                        sartorial, single-origin coffee food truck tousled
                                                        sed swag hella synth bitters next level consectetur
                                                        Helvetica twee. Craft beer ea tofu sint reprehenderit
                                                        cornhole, occaecat put a bird on it single-origin
                                                        coffee Tonx. Small batch 3 wolf moon ad, adipisicing
                                                        fap cornhole.</p>
                                                    <div className="hover">
                                                        <a href="#" className="extra-medium-text">
                                                            <span>Reply</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        <div className="comment-wraper">
                                            <p className="extra-medium-text"><span>Administrator</span></p>
                                            <p className="small-text">September 17, 2013 @ 1:38 pm</p>
                                            <p className="extra-medium-text">Small batch
                                                sartorial, single-origin coffee food truck tousled
                                                sed swag hella synth bitters next level consectetur
                                                Helvetica twee. Craft beer ea tofu sint reprehenderit
                                                cornhole, occaecat put a bird on it single-origin
                                                coffee Tonx. Small batch 3 wolf moon ad, adipisicing
                                                fap cornhole.</p>
                                            <div className="hover">
                                                <a href="#" className="extra-medium-text">
                                                    <span>Reply</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
}