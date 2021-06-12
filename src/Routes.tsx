import Home from "pages/Home"
import Registration from "pages/Registration";
import EditData from "pages/Edit"
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

        <Route path="/edit/:type?/:id?">
          <EditData />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;