import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/carActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeItem(props.feature.id)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}
export default connect(
  mapStateToProps,
  {removeItem}
)(AddedFeature);
