import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Restaurant from "../components/Restaurant";
import Slider from "../components/Slider";
import Shares from "../components/Shares";
import { getMain } from "../redux/actions/mainActions";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
  const dispatch = useDispatch();
  const { main, error, loading } = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(getMain());
  }, []);
  if (loading || !main) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { restaurant, categories, promos } = main;

  return (
    <>
      <header className="header">
        <Nav logo={true} title={true} />
      </header>
      <div className="container">
        <div>
          {restaurant &&
            restaurant.map((slid, key) => {
              return (
                <Slider
                  banner={slid.banner}
                  id={slid.id}
                  key={`${slid.id} ${key}`}
                />
              );
            })}
        </div>

        <div className="cat-block">
          {categories &&
            categories.map((cat, key) => {
              return (
                <Categories cat={cat} id={cat.id} key={`${cat.id} ${key}`} />
              );
            })}

          <Link to="/">
            <div className="cat" style={{ backgroundColor: "blue" }}>
              <div>
                <p className="cat__name">VSE</p>
              </div>
              data data
              <div className="cat__img">
                <img src="/assets/cat/white.svg" alt="vse" />
                <div className="icn">
                  <img src="/assets/cat/icn.svg" alt="vse" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="rest-content">
          {restaurant &&
            restaurant.map((rest, key) => {
              return <Restaurant rest={rest} key={`${rest.id} ${key}`} />;
            })}
        </div>

        <div>
          {promos &&
            promos.map((share, key) => {
              return (
                <Shares
                  share={share}
                  id={share.id}
                  key={`${share.id} ${key}`}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
