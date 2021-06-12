import DataTable from "components/DataTable";

import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="container">
        <h1 className="text-primary">Hello</h1>
        <DataTable type="customers" />
        
        <Link className="btn btn-primary" to="/cadastrar" > Cadastrar </Link>
      </div>
    </>
  );
}

export default Home;