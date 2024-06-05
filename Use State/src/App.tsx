import React, { useState } from 'react';

const UseStateForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UseStateForm;