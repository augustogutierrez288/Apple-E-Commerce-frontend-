import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/404error.webp';

function ErrorPage() {
  return (
    <div className='section-error'>
      <img src={error} alt="404error" />
      <p>Seccion en desarrollo, vuelva pronto</p>
      <Link to='/' className='btn btn-danger'>Volver al Inicio</Link>
    </div>
  )
}

export default ErrorPage