import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Calculator', path: '/calculator' },
    { id: 3, title: 'Quote', path: '/quote' },
  ];
  return (
    <nav data-testid="navbar" className="nav">
      <h1 className="logo">
        {' '}
        <NavLink to="/">Math Magicians</NavLink>
        {' '}
      </h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
