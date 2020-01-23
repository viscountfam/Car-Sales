import React from 'react';
import { connect } from 'react-redux'

// Step 2 - connect the component using the connect function
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}

export default AddedFeature;
