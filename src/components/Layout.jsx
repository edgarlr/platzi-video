import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = withRouter(({ children, location }) => (
  <div className='App'>
    <Header location={location} />
    { children }
    <Footer location={location} />
  </div>
));

export default Layout;
