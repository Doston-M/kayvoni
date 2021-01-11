import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import { getPromo } from "../redux/actions/promoActions";
import "../scss/pages/promo.scss";

const Promo = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { promo, error, loading } = useSelector((state) => state.promo);

  useEffect(() => {
    dispatch(getPromo(id));
  }, []);
  if (loading || !promo) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <header className="header">
        <Nav back={true} promoTitle={true} />
      </header>
      <div className="container">
        <h2>Акции</h2>
      </div>
    </>
  );
};
export default Promo;
