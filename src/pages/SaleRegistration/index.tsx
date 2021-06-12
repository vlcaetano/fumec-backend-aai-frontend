import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "utils/requests";
import { useHistory } from 'react-router-dom'

interface SaleData {
  amount: number,
	seller: {
    id: number
  },
	customer: {
    id: number
  }
}

function Registration() {
  
  const history = useHistory()

  const [amount, setAmount] = useState<number>(0)
  const [sellerId, setSellerId] = useState<number>(0)
  const [customerId, setCustomerId] = useState<number>(0)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
  }

  const handleSellerIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSellerId(parseFloat(e.target.value))
  }

  const handleCustomerIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerId(parseFloat(e.target.value))
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let saleData: SaleData = { 
        amount: amount,
        seller: {
          id: sellerId
        },
        customer: {
          id: customerId
        }
      }
    await axios.post(`${BASE_URL}/sales`, saleData)

    history.push('/');
  }

  return (
      <div className="container">
        <h1>Cadastro de Venda</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input type="number" className="form-control" id="amount" onChange={e => handleAmountChange(e)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Id vendedor</label>
          <input type="number" className="form-control" id="idSeller" onChange={e => handleCustomerIdChange(e)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Id cliente</label>
          <input type="number" className="form-control" id="idCustomer" onChange={e => handleSellerIdChange(e)} />
        </div>
        <button className="btn btn-primary" >Cadastrar</button>
      </form>
      </div>
  );
}

export default Registration;