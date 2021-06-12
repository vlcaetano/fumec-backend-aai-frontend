import { Link } from 'react-router-dom'
import SalesDataTable from "components/SalesDataTable";

function SalesPage() {
  return (
    <div className="container">
      <h1 className="text-primary mt-20">Vendas</h1>
      <SalesDataTable />
      <Link className="btn btn-primary" to="/registration/sales" > Cadastrar </Link>
      <br /><br />
      <Link className="btn btn-primary" to="/" > Voltar </Link>
    </div>
  );
}

export default SalesPage;