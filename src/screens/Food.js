import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import { getFood } from "../redux/actions/foodActions";
import "../scss/pages/food.scss";

const Food = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { food, error, loading } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(getFood(id));
  }, []);
  if (loading || !food) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { name_ru, description_ru, image, params = [] } = food;

  return (
    <>
      <header className="header">
        <Nav back={true} foodTitle={true} />
      </header>
      <div className="container">
        <div className="meal">
          <div className="meal__info">
            <img className="meal__info--img" src={image} alt={name_ru} />
            <div className="meal__info--name">{name_ru}</div>
            <div className="meal__info--desc">{description_ru}</div>
          </div>
          <div className="meal__count">
            <h2>Выберите вид</h2>
            {params &&
              params.map((price, key) => {
                return (
                  <button
                    className="type"
                    id={params.id}
                    key={`${params.id} ${key}`}
                  >
                    <div className="type__name">{price.name_ru}</div>
                    <div className="type__price">{price.price} сум</div>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Food;
