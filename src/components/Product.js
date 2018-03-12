// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div className="product">
        <h3>Name: {this.props.name}</h3>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermarks: {this.props.hasWatermark.toString()}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    let value = props[propName]
    if (value === undefined){
      return new Error(propName + ' in ' + `weight` + " is required")
    }
    if (isNaN(value)){
      return new Error('It is not a number.')
    }
    if (value < 80 || value > 300){
      return new Error('It should range between 80 and 300.')
    }

    return null
  }

}
Product.defaultProps = {
  hasWatermark: false
}

export default Product
