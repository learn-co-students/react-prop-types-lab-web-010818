import React from 'react';
import PropTypes from 'prop-types';

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark? {this.props.hasWatermark ? 'yes' : 'no'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (props[propName] == null) {
      return new Error(propName + ' in ' + componentName + " cannot be null.")
    } else if (typeof props[propName] !== 'number') {
      return new Error(propName + ' in ' + componentName + " must be a number.")
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(propName + ' in ' + componentName + " must be between 80 and 300.")
    }
    // If it gets here, no errors so return null
    return null;
  }
};
