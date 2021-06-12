import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from 'utils/requests';

interface idParam {
  id?: number,
  type?: string
}

interface Person {
  name: string,
  email: string,
  cpf: string
}

function EditData() {
  const { id, type } = useParams() as idParam

  const history = useHistory()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')

  useEffect(() => {
    axios.get(`${BASE_URL}/${type}/${id}`)
      .then(response => {
        let personData: Person = response.data
        setName(personData.name)
        setEmail(personData.email)
        setCpf(personData.cpf)
      })
      
  }, [id, type])

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

    let customer = {name, email, cpf}
    await axios.put(`${BASE_URL}/customers/${id}`, customer)

    history.push('/');
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" id="name" onChange={e => handleNameChange(e)} value={name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="email" onChange={e => handleEmailChange(e)} value={email} />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input type="text" className="form-control" id="cpf" onChange={e => handleCpfChange(e)} value={cpf} />
        </div>
        <button className="btn btn-primary" >Cadastrar</button>
      </form>
    </div>
  );
}

export default EditData;