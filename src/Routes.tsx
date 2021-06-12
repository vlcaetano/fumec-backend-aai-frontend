import Home from "pages/Home"
import Registration from "pages/Registration";
import { BrowserRouter, Switch, Route } from "react-router-dom"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/cadastrar">
          <Registration />
        </Route>

        <Route path="/editar/:id">
          <Registration />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;