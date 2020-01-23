import React from 'react';
import { connect } from 'react-redux';



const Total = props => {
  const additionalPrice = props.addedFeatures.reduce(function(acc, cv){
    return acc + cv.price
  }, 0);
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: state.car.price,
    addedFeatures: state.car.features
  }
}

export default connect(
  mapStateToProps,
  {}
)(Total);
