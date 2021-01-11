import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../scss/modules/nav.scss";

function Nav({ logo, title, back, restTitle, promoTitle, foodTitle }) {
  return (
    <div className="container">
      <div className="nav">
        {logo && (
          <Link to="/">
            <div className="nav__icon">
              <img className="nav__icon--icn" src="/assets/logo.svg" alt="" />
            </div>
          </Link>
        )}

        {back && (
          <Link to="/">
            {/* <div className="nav__icon"> */}
            <img className="nav__icon--icn" src="/assets/back.svg" alt="" />
            {/* </div> */}
          </Link>
        )}

        {title && <h2 className="nav__title">KAYVONI</h2>}
        {restTitle && <h2 className="nav__title">РЕСТОРАН</h2>}
        {promoTitle && <h2 className="nav__title">Акции</h2>}
        {foodTitle && <h2 className="nav__title">БЛЮДО</h2>}

        <div className="nav__basket">
          <Link to="/">
            <img src="/assets/nav-basket.svg" alt="" />
          </Link>
          <span className="nav__basket--price">99</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Nav);
