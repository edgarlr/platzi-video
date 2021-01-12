import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h2>Inicia Sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='Correo'
            className='input'
            placeholder='Correo'
            type='text'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Correo'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='button'>Iniciar Sesión</button>
          <div className='login__container--remeber-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='checkbox' />
              Remeber me
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <div className='login__container--social-media'>
          <div>
            <i className='fa fa-facebook-square' />
            Inicia sesión con Facebook
          </div>
          <div>
            <i className='fa fa-google' />
            Inicia sesión con Google
          </div>
        </div>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
