import React from 'react';
import { connect } from "react-redux"

const Header = props => {
  // console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};
const mapStateToProps = state => {
  return { 
  car: state.car
  }
}
export default connect ( mapStateToProps, {}) (Header);

//Header is a banana word
//Connect is connecting redux store/reducer and also connecting our actions, and at the moment there are no actions but we will be adding them, and it's also connecting our mSTP to header
//The provider will be managing the state, and then connect will be watching for any changes to the state.
//props are objects

