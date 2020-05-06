import React from "react";
import PropTypes from "prop-types";

function KegThumbnail(props) {
	return (
		<React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
			<h3>{props.name}</h3>
			<h4>{props.brand}</h4>
			<p>{props.price}</p>
			<p>{props.flavor}</p>
      <p>{props.pints}</p>
      </div>
      <button onClick ={() => props.whenPintPurchased(props.id)}>Buy Pint!</button>
		</React.Fragment>
	);
}

KegThumbnail.propTypes = {
	name: PropTypes.string, 
	brand: PropTypes.string, 
	price: PropTypes.string, 
  flavor: PropTypes.string, 
  pints: PropTypes.number,
  id: PropTypes.string,
  whenPintPurchased: PropTypes.func,
  whenKegClicked: PropTypes.func
};

export default KegThumbnail;