import React from "react";
import youtube from "./../media/youtube.png";
import vimeo from "./../media/vimeo.png";
// import Link from "react-dom"
const Nav = () => {
  return (
    <footer className="footer row">
      <div className="footer__icons ">
      <img src={vimeo} alt="Vimeo"  />
      <img src={youtube} alt="Youtube"  />
    
      </div>
      <div className="footer__text ">
        <div className="footer__text__mail">
          <p className="text-muted">hello@yay.com</p>
        </div>
        <div className="footer__text__copyrights">
          <p className="text-muted">Copyright 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Nav;
