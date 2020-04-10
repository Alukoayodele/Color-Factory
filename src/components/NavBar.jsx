import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-secondary'>
      <Link className='navbar-brand' to='/colors'>
        Color Factory
      </Link>
      <h5>Welcome to Color Factory</h5>
      <Link className='navbar-brand' to='color/new'>
        Add New Color
      </Link>
    </nav>
  );
};

export default NavBar;
