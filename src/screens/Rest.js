import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import { getRest } from "../redux/actions/restActions";
import "../scss/pages/rest.scss";

const Rest = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { rest, error, loading } = useSelector((state) => state.rest);

  useEffect(() => {
    dispatch(getRest(id));
  }, []);
  if (loading || !rest) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const {
    name,
    description_ru,
    logo,
    deposit,
    categories = [],
    workdays = [],
    rating = [],
    types = [],
    sorts = [],
    food = [],
  } = rest;

  // const today = new Date().getDay();
  // const wdays = workdays[today];
  // const workClose = wdays.open_time;
  // console.log(workClose);
  // const workOpen = wdays.close_time;
  const { count, avg } = rating;
  const arr = [1, 2, 3, 4, 5];
  const ratingStar = arr.slice(0, avg);
  const emptyStar = arr.slice(0, -ratingStar.length);

  return (
    <>
      <header className="header">
        <Nav back={true} restTitle={true} />
      </header>
      <div className="restaurant-container">
        <div className="container">
          <div className="restaurant">
            <div className="restaurant__img">
              <div>
                <img
                  className="restaurant__img--back"
                  src="/assets/restaurant/yapona-mama.png"
                  alt={name}
                />
              </div>
              <Link to={`/show/promo/${id}`}>
                <div>
                  <img
                    className="restaurant__img--icn"
                    src="/assets/restaurant/shares.svg"
                  />
                </div>
              </Link>
            </div>
            <div className="restaurant__about">
              <div className="head">
                <div className="head__title">
                  <span className="head__title--type">
                    {!!categories.length && categories[0].name_ru}
                  </span>
                  <p className="head__title--deposit">
                    Мин заказ: {deposit} сум
                  </p>
                </div>

                <div className="head__rest">
                  <div>
                    <div className="head__rest--name">{name}</div>

                    <div className="head__rest--desc">
                      <p>{description_ru}</p>
                    </div>
                  </div>

                  <div>
                    <img className="head__rest--logo" src={logo} alt={name} />
                  </div>
                </div>

                <div className="head__about">
                  <div className="time">
                    <div className="time__icn">
                      <img src="/assets/restaurant/watch.svg" />
                    </div>
                    <div className="time__text">
                      {!!workdays.length &&
                        `${workdays[0].open_time.slice(
                          0,
                          5
                        )} - ${workdays[0].close_time.slice(0, 5)}`}
                    </div>
                  </div>

                  <div className="head__about--rating">
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
                </div>
              </div>
              <div className="restaurant__about--map">
                <button className="btnMap">
                  <div className="btnMap__icon">
                    <img src="/assets/restaurant/map.svg" />
                    <span className="btnMap__icon--text">
                      Проложить маршрут
                    </span>
                  </div>
                </button>
              </div>
              <div className="restaurant__about--info">
                <div className="moreInfo">
                  <div className="moreInfo__title">Доп.Информации</div>

                  <button className="moreInfo__btnInfo">
                    <span>
                      {!!types.length && (
                        <img
                          className="moreInfo__btnInfo--icn"
                          src={types[0].image}
                          alt={types[0].name_ru}
                        />
                      )}
                    </span>
                    <span className="moreInfo__btnInfo--text">
                      {!!types.length && types[0].name_ru}
                    </span>
                  </button>
                </div>
              </div>
              <div className="restaurant__about--cat">
                <div className="categories">
                  <div className="categories__title">Категории</div>
                  <button className="categories__btnCat">
                    {!!sorts.length && sorts[0].name_ru}
                  </button>
                </div>
              </div>
              <div className="restaurant__about--meal">
                {!!food.length &&
                  food.map((foods, key) => {
                    return (
                      <Link to={`/show/food/${id}`}>
                        <div className="food" key={`${foods.id} ${key}`}>
                          <div className="food__info">
                            <div className="food__info--name">
                              {foods.name_ru}
                            </div>
                            <div className="food__info--desc">
                              {foods.description_ru}
                            </div>
                          </div>
                          <div className="food__img">
                            <img
                              className="food__img--size"
                              src={foods.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <div className="restaurant__about--order">
                <button className="btnOrder" type="button">
                  Заказать столик
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rest;
