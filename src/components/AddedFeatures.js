import React from 'react';
import {connect} from "react-redux"

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(featureObj => (
            <AddedFeature key={featureObj.id} feature={featureObj}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect ( mapStateToProps, {} ) (AddedFeatures);

// export default connect ( mapStateToProps, {} ) (AddedFeatures);
//props
//In react we are using JS and JSX, and JSX = does equal, equal
//Each item is 