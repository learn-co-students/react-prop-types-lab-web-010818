// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {

  render() {
    return(
      <div className="product">
          <ul>
            <li>{this.props.name}</li> // not required
            <li>{this.props.producer}</li> // not required
            <li>{this.props.hasWatermark}</li> // not required
          </ul>
      </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false
  };

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired, // OneOf -- https://www.npmjs.com/package/prop-types
  weight: (props, propName) => {
      const weight = props[propName];

      if (weight === undefined) {
        return new Error('The `weight` prop is required.');
      }else if (isNaN(weight)) {
        return new Error('The `weight` prop is not a number.');
      }else if (weight<80 || weight > 300) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
    }
  }


export default Product;

// <div className="order">
//       <ul>
//         <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
//         <li>{this.props.size}</li>
//         <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
//         <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
//       </ul>
//     </div>

//
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!

//
// Order.propTypes = {
//   cone: PropTypes.bool,
//   size: PropTypes.string,
//   scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
//   orderInfo: PropTypes.object.isRequired
// };
