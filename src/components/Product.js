import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <h1>{this.props.name}</h1>
        <ul>
          <li>producer: {this.props.producer}</li>
          <li>has watermark: {this.props.hasWatermark ? 'yes' : 'nah'}</li>
          <li>color: {this.props.color}</li>
          <li>weight: {this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf( ['white', 'eggshell-white', 'salmon'] ).isRequired,
  weight: (prop, propName) => {
    const weight = prop[propName];
    if (weight === undefined) {
      return new Error(`${propName} must be included.`)
    } else if (isNaN(weight)) {
      return new Error(`${propName} must be a number.`)
    } else if (weight < 80 || weight > 300) {
      return new Error(`${propName} must be between 80 and 300.`)
    }
  }
}
