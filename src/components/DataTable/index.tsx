import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Person } from "types/person";
import { BASE_URL } from "utils/requests";

function DataTable() {

  const [customerList, setCustomerList] = useState<Person[]>([])
  const [requestData, setRequestData] = useState<Date>(new Date())

  useEffect(() => {
    axios.get(`${BASE_URL}/customers`)
      .then(response => {
        setCustomerList(response.data)
        console.log(response.data)
      })
      
  }, [requestData])

  const handleDelete = (id: number) => {
    axios.delete(`${BASE_URL}/customers/${id}`)
      .then(() => setRequestData(new Date()))
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <button 
                  onClick={ () => handleDelete(item.id) }
                  className="btn btn-primary"
                > 
                  Del 
                </button>
              </td>
              <td>
                <Link 
                  className="btn btn-primary" 
                  to={`/editar/${item.id}`}
                > 
                  Editar 
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;