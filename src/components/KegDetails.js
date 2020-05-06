import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onClickingDelete } = props;
	return (
		<React.Fragment>
      <h3>{keg.name}</h3>
			<h4>{keg.brand}</h4>
			<p>{keg.price}</p>
			<p>{keg.flavor}</p>
      <button onClick={ props.onClickingEdit }> Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id)}> Delete Keg </button>
		</React.Fragment>
	);
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  OnClickingEdit: PropTypes.func
};

export default KegDetails;