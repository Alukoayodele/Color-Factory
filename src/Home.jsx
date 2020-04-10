import React, { Fragment } from 'react';
import Colors from './components/Colors';
import NavBar from './components/NavBar';

const Home = ({ colors }) => {
  return (
    <Fragment>
      <NavBar />
      <Colors colors={colors} />
    </Fragment>
  );
};

export default Home;
