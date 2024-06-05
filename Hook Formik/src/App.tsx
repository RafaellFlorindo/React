import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ nome: '', email: '', telefone: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>
              Nome:
              <Field type="text" name="nome" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <Field type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Telefone:
              <Field type="tel" name="telefone" />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;