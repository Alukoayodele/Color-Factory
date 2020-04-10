import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Colors = ({ colors }) => {
  return (
    <div className='container text-center mt-4 '>
      <h2>Please Select a Color</h2>
      <ul className='list-group w-25 mt-4 link-group'>
        {colors.map((color, index) => (
          <li
            className='list-group-item'
            style={{ listStyle: 'none' }}
            key={index}
          >
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
