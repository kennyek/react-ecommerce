import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormField } from './Form';

const Login = () => {
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: {
      element: 'input',
      value: '',
      config: {
        name: 'email_input',
        type: 'email',
        placeholder: 'Enter your email',
      },
      validation: {
        required: true,
        email: true,
      },
      valid: false,
      touched: false,
      validationMessage: '',
    },
    password: {
      element: 'input',
      value: '',
      config: {
        name: 'password_input',
        type: 'password',
        placeholder: 'Enter your password',
      },
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      validationMessage: '',
    },
  });

  function handleSubmit(event: React.FormEvent) { }
  function updateForm(event: React.ChangeEvent<HTMLInputElement>) { }

  return (
    <div className="signin_wrapper">
      <form onSubmit={handleSubmit}>
        <FormField
          id={'email'}
          formData={formData.email}
          onChange={updateForm}
        />
      </form>
    </div>
  );
};

export default connect()(Login);