import Home from "pages/Home"
import Registration from "pages/Registration";
import SaleRegistration from "pages/SaleRegistration";
import SalesPage from "pages/Sales";
import EditData from "pages/Edit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/sales">
          <SalesPage />
        </Route>
        
        <Route path="/registration/sales">
          <SaleRegistration />
        </Route>

        <Route path="/registration/:type?">
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