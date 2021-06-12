import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Sale } from "types/sale";
import { BASE_URL } from "utils/requests";

function SalesDataTable() {

  const [saleList, setSaleList] = useState<Sale[]>([])
  const [requestData, setRequestData] = useState<Date>(new Date())

  useEffect(() => {
    axios.get(`${BASE_URL}/sales`)
      .then(response => {
        setSaleList(response.data)
      })
      
  }, [requestData])

  const handleDelete = (id: number) => {
    axios.delete(`${BASE_URL}/sales/${id}`)
      .then(() => setRequestData(new Date()))
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Valor (R$)</th>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Cliente</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {saleList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.amount.toFixed(2)}</td>
              <td>{item.date}</td>
              <td>{item.seller.name}</td>
              <td>{item.customer.name}</td>
              <td>
                <button 
                  onClick={ () => handleDelete(item.id) }
                  className="btn btn-primary"
                > 
                  Del 
                </button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesDataTable;