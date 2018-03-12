// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
    <div>
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
      </ul>
    </div>)
  }
}

function numberRange(props, propName, componentName){

  let value = props[propName];
  if (value === undefined){
    return new Error(propName + ' is required.')
  }
   if (isNaN(value)){
     return new Error(propName + ' is not a number.')
   }
   if (!(value > 80 && value < 300)){
     return new Error(propName + ' in ' + componentName + ' is out of range.')
   }
}

// function colorType(props, propName, componentName){
//   let options = ['white', 'eggshell-white', 'salmon'];
//   let value = props[propName];
//
//     if(value){
//       if (options.includes(value)){
//         return null
//       } else {
//         return new Error(propName + ' in ' + componentName + ' is not available.')
//       }
//     } else {
//       return new Error(propName + ' in ' + componentName + ' is required.')
//     }
// }

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: numberRange


}

export default Product;
