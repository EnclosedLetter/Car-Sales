import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from "react-redux";

const AdditionalFeatures = props => {
  // console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(featureObj => (
            <AdditionalFeature key={featureObj.id} feature={featureObj} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}


export default connect (mapStateToProps, {}) (AdditionalFeatures);
//1 set up store in Index
//2 in our reducer we set up our initial state which holds up our initial values.
//3 we render the desired initial values to the screen
//4 now we need to be able to update values and add functions or add functions that update values
//go over .map
