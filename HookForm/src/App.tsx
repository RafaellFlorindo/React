import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Nome:
          <input type="text" {...register('nome')} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...register('email')} />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input type="tel" {...register('telefone')} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ReactHookForm;
