import React from "react";
import Loader from "react-loader-spinner";

export default class Preloader extends React.Component {
  render() {
    return (
      <div className="loader">
        <Loader type="Oval" color="#747ca5" height={80} width={80} />
      </div>
    );
  }
}
