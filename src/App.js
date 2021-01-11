import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./redux/rootConfig";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Rest from "./screens/Rest";
import Promo from "./screens/Promo";
import Food from "./screens/Food";
// import Nav from "./components/Nav";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <header className="header">
          <Nav logo={true} title={true} />
        </header> */}
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/rest/:id"} component={Rest} />
          <Route path={"/show/promo/:id"} component={Promo} />
          <Route path={"/show/food/:id"} component={Food} />
        </Switch>
        <footer className="footerBack">
          <Footer />
        </footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
