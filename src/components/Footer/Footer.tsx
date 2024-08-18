import React from 'react';

import logo from '../../../public/images/Footer/Shape 1.png';

import './Footer.scss';

export const Footer = React.memo(() => (
  <div className="footer">
    <a href="https://onpoint.ru" target="_blank">
      <img className="footer-logo" src={logo} alt="Onpoint" />
    </a>
  </div>
));
