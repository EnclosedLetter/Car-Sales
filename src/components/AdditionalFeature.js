import React from 'react';
import { connect } from "react-redux"
import { addFeature } from "../actions/actions"

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* <button className="button">Add</button> */}
      <button
        className="button"
        onClick={() => {
          props.addFeature(props.feature)
        }} >Add</button>
      {props.feature.name} (at price{props.feature.price})
    </li>
  );
};



export default connect ( null, {addFeature}) (AdditionalFeature);

//props is an object