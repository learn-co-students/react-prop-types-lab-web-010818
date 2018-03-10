import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.name} </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    let value = props[propName]
    if (value === undefined){
      return new Error(propName + ' in ' + componentName + " is required")
    }
    if (isNaN(value)){
      return new Error('The `weight` prop is not a number.')
    }
    if (value < 80 || value > 300){
      return new Error('The `weight` prop should range between 80 and 300.')
    }

    return null
  }
}



export default Product
