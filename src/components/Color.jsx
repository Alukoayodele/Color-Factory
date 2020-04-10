import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const Color = ({ colors }) => {
  const { color } = useParams();
  const { push } = useHistory();
  const isValid = colors.includes(color);
  useEffect(() => {
    if (!isValid) {
      push('/colors');
    }
  }, [isValid, push]);
  return (
    <div style={{ background: color }} className='primary'>
      <Link
        className='mx-5 my-5'
        style={{ textDecoration: 'none', color: 'white' }}
        to='/colors'
      >
        GO BACK
      </Link>
      <p className='primaryText'>This is color {color}</p>
    </div>
  );
};

export default Color;
