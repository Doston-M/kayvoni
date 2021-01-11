import React from "react";
import { Link } from "react-router-dom";
import "../scss/modules/restaurant.scss";

function Restaurant({ rest }) {
  const { name_ru, logo, categories, rating, workdays, id } = rest;
  const today = new Date().getDay();
  const wdays = workdays[today];
  const workClose = wdays.close_time;
  const workOpen = wdays.open_time;
  const { count, avg } = rating;
  const arr = [1, 2, 3, 4, 5];
  const ratingStar = arr.slice(0, avg);
  const emptyStar = arr.slice(0, -ratingStar.length);
  return (
    <>
      <div className="rest">
        <Link to={`/rest/${id}`}>
          <div className="rest__head">
            <img className="rest__head--icn" src={logo} alt={name_ru} />
          </div>
        </Link>
        <div className="rest__body">
          <div className="rest__body--title">{name_ru}</div>
          <div>
            <div className="rest__body--cat">{categories[0].name_ru}</div>
            <div className="rest__body--rating">
              {!!ratingStar &&
                ratingStar.map((i) => (
                  <img src="/assets/restaurant/star.svg" key={i} />
                ))}
              {!!emptyStar &&
                emptyStar.map((i) => (
                  <img src="/assets/restaurant/emptyStar.svg" key={i} />
                ))}{" "}
              <span>({count})</span>
            </div>
            <div className="rest__body--time">
              <img src="/assets/restaurant/watch.svg" alt="" />{" "}
              {workOpen.slice(0, 5)} - {workClose.slice(0, 5)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Restaurant;
