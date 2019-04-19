import React from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import withRoot from '../withRoot';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Map />
    </React.Fragment>
  );
};

export default withRoot(App);
