import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../scss/modules/footer.scss";

function Footer({}) {
  return (
    <div className="container">
      <div className="footer">
        <Link to="/">
          <div className="footer__items">
            <img
              className="footer__items--icon"
              src="/assets/footer/home.svg"
              alt=""
            />
          </div>
        </Link>
        <Link to="/">
          <div className="footer__items">
            <img
              className="footer__items--icon"
              src="/assets/footer/menu.svg"
              alt=""
            />
          </div>
        </Link>
        <Link to="/">
          <div className="footer__items">
            <img
              className="footer__items--icon"
              src="/assets/footer/profil.svg"
              alt=""
            />
          </div>
        </Link>
        <Link to="/">
          <div className="footer__items">
            <img
              className="footer__items--icon"
              src="/assets/footer/search.svg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Footer);
