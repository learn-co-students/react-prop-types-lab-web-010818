import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    const {name, producer, hasWatermark, color, weight} = this.props;
    return(
      <div>
        Product
        <p>Product Name: {name}</p>
        <p>Producer: {producer}</p>
        <p>Watermark: {hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props,propName)=>{
    const weight = props[propName];
    const validsWeight = weight > 80 && weight < 300;
    
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }


    if (!validsWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}
