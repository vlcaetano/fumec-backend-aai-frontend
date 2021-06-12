import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { useHistory, useParams } from 'react-router-dom'
import cpfValidation from "utils/cpfValidation";

interface idParam {
  type: string
}

function Registration() {
  
  const history = useHistory()
  const { type } = useParams() as idParam

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')

  const [cpfError, setCpfError] = useState<string>('')
  const [errorList, setErrorList] = useState<string>('')

  useEffect(() => {
    setErrorList(cpfError)
  }, [cpfError])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (cpfValidation(cpf)) {
      setCpfError('')
    } else {
      setCpfError('CPF inválido')
      return
    }

    let personData = {name, email, cpf}
    await axios.post(`${BASE_URL}/${type}`, personData)

    history.push('/');
  }

  return (
    <div className="container">
    <h1 className="text-primary">Cadastro</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" onChange={e => handleNameChange(e)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            onChange={e => handleEmailChange(e)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF (Somente números)</label>
          <input 
            type="text" 
            className="form-control" 
            id="cpf" onChange={e => handleCpfChange(e)} 
            minLength={11} 
            maxLength={11} 
            required
          />
        </div>
        <button className="btn btn-primary" >Cadastrar</button>
        <span className="mt-2 d-block text-danger">{errorList}</span>
      </form>
    </div>
  );
}

export default Registration;