import React from 'react';

import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// import { addFeature } from './actions/addFeatures'
// import { removeFeature } from './actions/removeFeature';

const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
      <AdditionalFeatures />
        {/* <Total car={props.car} additionalPrice={props.additionalPrice} /> */}
      </div>
    </div>
  );
};

export default App;
//Whenever it's not a default name, you have to call it the correct name
//When we export default name can be changed but directory has to be correct
//Move over the hard coded state into initialState