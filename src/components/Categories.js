import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../scss/modules/cat.scss";

function Categories({ cat }) {
  const { name_ru, color, image } = cat;
  return (
    <>
      <Link to="/">
        <div
          className="cat"
          style={{
            backgroundColor: `#${color}`,
          }}
        >
          <div>
            <p className="cat__name">{name_ru}</p>
          </div>

          <div className="cat__img">
            <img src="/assets/cat/white.svg" alt={name_ru} />
            <div className="icn">
              <img src={image} alt={name_ru} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default withRouter(Categories);
