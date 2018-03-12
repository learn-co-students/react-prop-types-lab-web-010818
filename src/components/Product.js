import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (<div>Product</div>)
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
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: function (props, propName) {
    if (props[propName] === undefined) {
      return new Error ('The `weight` prop is required.')
    }
    if (isNaN(props[propName])) {
      return new Error ('The `weight` prop is not a number.')
    }
    if (!(props[propName] > 80 && props[propName] < 300)) {
      return new Error ('The `weight` prop should range between 80 and 300.')
    }
  }
}

export default Product;
