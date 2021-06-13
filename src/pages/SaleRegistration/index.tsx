import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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

interface ValidationError {
  type: string
  errorMsg: string
}

function Registration() {
  
  const history = useHistory()

  const [amount, setAmount] = useState<number>(0)
  const [sellerId, setSellerId] = useState<number>(0)
  const [customerId, setCustomerId] = useState<number>(0)

  const [errorList, setErrorList] = useState<ValidationError[]>([])
  const [sellerError, setSellerError] = useState<ValidationError>({type: 'seller', errorMsg: ''})
  const [customerError, setCustomerError] = useState<ValidationError>({type: 'customer', errorMsg: ''})

  let customerExists: boolean = false
  let sellerExists: boolean = false

  useEffect(() => {
      setErrorList([sellerError, customerError])
  }, [sellerError, customerError])

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
  }

  const handleSellerIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSellerId(parseFloat(e.target.value))
  }

  const handleCustomerIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerId(parseFloat(e.target.value))
  }

  const validadeCustomerId = async () => {
    await axios.get(`${BASE_URL}/customers/${customerId}`)
      .then(() => { 
        customerExists = true 
        setCustomerError({type: 'customer', errorMsg: ''})
      })
      .catch(() => {
        customerExists = false
        setCustomerError({type: 'customer', errorMsg: 'ID do cliente não encontrado'})
      })
  }

  const validadeSellerId = async () => {
    await axios.get(`${BASE_URL}/sellers/${sellerId}`)
      .then(() => {
        sellerExists = true
        setSellerError({type: 'seller', errorMsg: ''})
      })
      .catch(() => {
        sellerExists = false
        setSellerError({type: 'seller', errorMsg: 'ID do vendedor não encontrado'})
      })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await validadeSellerId()
    await validadeCustomerId()

    if (!sellerExists || !customerExists) {
      return
    }

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

    history.push('/sales');
  }

  return (
      <div className="container">
        <h1 className="text-primary">Cadastro de Venda</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Valor</label>
            <input 
              type="number" 
              className="form-control" 
              id="amount" 
              onChange={e => handleAmountChange(e)} 
              step={0.01} 
              min={0} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Id vendedor</label>
            <input 
              type="number" 
              className="form-control" 
              id="idSeller" 
              onChange={e => handleSellerIdChange(e)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Id cliente</label>
            <input 
              type="number" 
              className="form-control" 
              id="idCustomer" 
              onChange={e => handleCustomerIdChange(e)} 
              required 
            />
          </div>
          <button className="btn btn-primary" >Cadastrar</button>
          {errorList.map((err) => <span className="mt-2 d-block text-danger" key={err.type}>{err.errorMsg}</span> )}
        </form>
      </div>
  );
}

export default Registration;