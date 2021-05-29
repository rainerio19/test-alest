import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoutes from "./private.routes";
import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import Cadastro from "./views/pages/Cadastro";
import Dash from "./views/pages/Dash";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastrar" component={Cadastro} />
        <PrivateRoutes path="/dash" exact component={Dash} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
