import React from 'react';
import './Header.scss';
import home from '../../../public/images/Header/image.png';
import { useAppContext } from "../../AppContext";

export const Header = React.memo(() => {
  const {onReset} = useAppContext();

  return (
    <div className="header">
      <img className="header__home-icon" src={home} alt="Home" onClick={onReset} />
      <p className="header__project">Project</p>
    </div>
  );
});

