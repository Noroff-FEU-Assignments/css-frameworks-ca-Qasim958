import React from "react";
// import Link from "react-dom"
const Nav = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top navigation">
      <div className="container-fluid navigation__container">
        <div className="navbar-header navigation__container__brand">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a
            className="navbar-brand navigation__container__brand__heading"
            href="/"
          >
            The YAY Company
          </a>
        </div>

        <div
          className="collapse navbar-collapse navigation__container__primary"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navigation__container__primary__menu">
            <li className="active navigation__container__primary__menu__heading">
              <a href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right navigation__container__primary__search">
            <form className="navbar-form navigation__container__primary__search__form">
              <div className="form-group navigation__container__primary__search__form--input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button
                type="submit"
                className="btn btn-default navigation__container__primary__search__form--button"
              >
                Go
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
