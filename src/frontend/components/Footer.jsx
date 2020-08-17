import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = ({ location }) => {
  return (
    <footer className={`footer ${location.pathname === '/register' || location.pathname === '/login' ? 'footer__register-login' : ''}`}>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
