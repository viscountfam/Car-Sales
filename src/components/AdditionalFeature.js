import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/carActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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
  {addItem}
)(AdditionalFeature);
