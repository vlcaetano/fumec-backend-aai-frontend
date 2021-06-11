import DataTable from "components/DataTable";
import RegistrationForm from "components/RegistrationForm";

function Home() {
  return (
    <>
    <h1>Home</h1>
    <div className="container">
      <h1 className="text-primary">Hello</h1>
      <DataTable />
      <RegistrationForm />
    </div>
    </>
  );
}

export default Home;