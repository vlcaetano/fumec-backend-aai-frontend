
function RegistrationForm() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label className="form-label">CPF</label>
        <input type="text" className="form-control" id="cpf" />
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;