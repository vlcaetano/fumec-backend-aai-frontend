import DataTable from "components/DataTable";
import SalesDataTable from "components/SalesDataTable";

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1 className="text-primary">Clientes</h1>
      <DataTable type="customers" />
      <Link className="btn btn-primary" to="/registration/customers" > Cadastrar </Link>
      
      <br/><br/>
      <h1 className="text-primary mt-20">Vendedores</h1>
      <DataTable type="sellers" />
      <Link className="btn btn-primary" to="/registration/sellers" > Cadastrar </Link>

      <br/><br/>
      <h1 className="text-primary mt-20">Vendas</h1>
      <SalesDataTable />
      <Link className="btn btn-primary" to="/registration/sellers" > Cadastrar </Link>
    </div>
  );
}

export default Home;