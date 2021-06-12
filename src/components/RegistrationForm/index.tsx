import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "utils/requests";
import { useHistory } from 'react-router-dom'

function RegistrationForm() {
  const history = useHistory()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')

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

    let customers = {name, email, cpf}
    await axios.post(`${BASE_URL}/customers`, customers)

    history.push('/');
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input type="text" className="form-control" id="name" onChange={e => handleNameChange(e)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="email" onChange={e => handleEmailChange(e)} />
      </div>
      <div className="mb-3">
        <label className="form-label">CPF</label>
        <input type="text" className="form-control" id="cpf" onChange={e => handleCpfChange(e)} />
      </div>
      <button className="btn btn-primary" >Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;