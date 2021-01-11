import React from "react";
import { Link } from "react-router-dom";
import "../scss/modules/shares.scss";

function Shares({ share, id }) {
  const { description_ru, name_ru, image } = share;
  return (
    <>
      <h2 className="share-title">Акции</h2>
      <Link to={`/show/promo/${id}`}>
        <div className="share">
          <div className="content">
            <div className="content__left">
              <div className="head">
                <div className="head__title">Купи три по цене 2 сетов</div>
                <div className="head__icn">
                  <img
                    className="head__icn--share"
                    src="/assets/restaurant/shares.svg"
                  />
                </div>
              </div>
              <div className="content__left--name">{name_ru}</div>
              <div className="content__left--desc">{description_ru}</div>
            </div>
            <div className="content__right">
              <img className="content__right--icn" src={image} alt={name_ru} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Shares;
