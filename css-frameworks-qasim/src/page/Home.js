import React from "react";
import carousel1 from "./../media/Carousel images/carousel-1.jpg";
import carousel2 from "./../media/Carousel images/carousel-2.jpg";
import carousel3 from "./../media/Carousel images/carousel-3.jpg";
import tab1 from "./../media/Tab images/tab-1.jpg";
import tab2 from "./../media/Tab images/tab-2.jpg";
import tab3 from "./../media/Tab images/tab-3.jpg";
import share from "./../media/social/share.png";
import facebook from "./../media/social/facebook.png";
import twitter from "./../media/social/twitter.png";

export const Home = () => {
  return (
    <main className="home">
      <section className="home__carousel">
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={carousel1} alt="carousel-1" />
            </div>
            <div className="item">
              <img src={carousel2} alt="carousel-2" />
            </div>
            <div className="item">
              <img src={carousel3} alt="carousel-3" />
            </div>
          </div>
        </div>
      </section>
      <section className="home__main">
        <div className="home__main__content">
          <h1>We do YAY things</h1>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
            sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
        <div className="home__main__tabSection">
          <div className="">
            <ul className="nav nav-tabs" role="tablist" >
              <li role="presentation" className="active" >
                <a
                className="active"
                  href="#first"
                  aria-controls="first"
                  role="tab"
                  data-toggle="tab"

                >
                  First<span className="sr-only">(current)</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#second"
                  aria-controls="second"
                  role="tab"
                  data-toggle="tab"
                >
                  Second
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#third"
                  aria-controls="third"
                  role="tab"
                  data-toggle="tab"
                >
                  Third
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="first">
                <div className="tab-pane__tab1">
                  <div className="tab-pane__tab1__img">
                    <img src={tab1} alt="First tab" />
                  </div>
                  <div className="tab-pane__tab1__txt">
                    <div className="tab-pane__tab1__txt__para">
                      <p>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor
                        massa, venenatis pharetra leo laoreet a. Nullam non
                        eleifend justo, a ullamcorper turpis. Cras vehicula
                        pharetra lectus non maximus. Sed condimentum mattis
                        rhoncus.
                      </p>
                    </div>
                    <div className="tab-pane__tab1__txt__socialIcons">
                      <a href="/">
                        <img src={share} alt="share-tab1" />
                      </a>
                      <a href="/">
                        <img src={facebook} alt="facebook-tab1" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="twitter-tab1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="second">
                <div className="tab-pane__tab1">
                  <div className="tab-pane__tab1__img">
                    <img src={tab2} alt="Second tab" />
                  </div>
                  <div className="tab-pane__tab1__txt">
                    <div className="tab-pane__tab1__txt__para">
                      <p>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor
                        massa, venenatis pharetra leo laoreet a. Nullam non
                        eleifend justo, a ullamcorper turpis. Cras vehicula
                        pharetra lectus non maximus. Sed condimentum mattis
                        rhoncus.
                      </p>
                    </div>
                    <div className="tab-pane__tab1__txt__socialIcons">
                      <a href="/">
                        <img src={share} alt="share-tab2" />
                      </a>
                      <a href="/">
                        <img src={facebook} alt="facebook-tab2" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="twitter-tab3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="third">
                <div className="tab-pane__tab1">
                  <div className="tab-pane__tab1__img">
                    <img src={tab3} alt="Third tab" />
                  </div>
                  <div className="tab-pane__tab1__txt">
                    <div className="tab-pane__tab1__txt__para">
                      <p>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor
                        massa, venenatis pharetra leo laoreet a. Nullam non
                        eleifend justo, a ullamcorper turpis. Cras vehicula
                        pharetra lectus non maximus. Sed condimentum mattis
                        rhoncus.
                      </p>
                    </div>
                    <div className="tab-pane__tab1__txt__socialIcons">
                      <a href="/">
                        <img src={share} alt="share-tab3" />
                      </a>
                      <a href="/">
                        <img src={facebook} alt="facebook-tab3" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="twitter-tab3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home__main__accordian">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="menu_one">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseMenuOne"
                    aria-expanded="false"
                    aria-controls="collapseMenuOne"
                  >
                    First
                  </button>
                </h2>
              </div>
              <div
                id="collapseMenuOne"
                className="collapse"
                aria-labelledby="menu_one"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="card-body__para">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                  </div>
                  <div className="card-body__img">
                    <img src={tab1} alt="First tab" />
                  </div>
                  <div className="card-body__socialIcons">
                    <a href="/">
                      <img src={share} alt="share-tab1" />
                    </a>
                    <a href="/">
                      <img src={facebook} alt="facebook-tab1" />
                    </a>
                    <a href="/">
                      <img src={twitter} alt="twitter-tab1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="menu_second">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseMenuSecond"
                    aria-expanded="false"
                    aria-controls="collapseMenuSecond"
                  >
                    Second
                  </button>
                </h2>
              </div>
              <div
                id="collapseMenuSecond"
                className="collapse"
                aria-labelledby="menu_second"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="card-body__para">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                  </div>
                  <div className="card-body__img">
                    <img src={tab2} alt="Second tab" />
                  </div>
                  <div className="card-body__socialIcons">
                    <a href="/">
                      <img src={share} alt="share-tab2" />
                    </a>
                    <a href="/">
                      <img src={facebook} alt="facebook-tab2" />
                    </a>
                    <a href="/">
                      <img src={twitter} alt="twitter-tab2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
           

           
            <div className="card">
              <div className="card-header" id="menu_third">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseMenuThird"
                    aria-expanded="false"
                    aria-controls="collapseMenuThird"
                  >
                    Third
                  </button>
                </h2>
              </div>
              <div
                id="collapseMenuThird"
                className="collapse"
                aria-labelledby="menu_third"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="card-body__para">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                  </div>
                  <div className="card-body__img">
                    <img src={tab3} alt="Third tab" />
                  </div>
                  <div className="card-body__socialIcons">
                    <a href="/">
                      <img src={share} alt="share-tab3" />
                    </a>
                    <a href="/">
                      <img src={facebook} alt="facebook-tab3" />
                    </a>
                    <a href="/">
                      <img src={twitter} alt="twitter-tab3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
};

