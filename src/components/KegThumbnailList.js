import React from "react";
import KegThumbnail from "./KegThumbnail";
import PropTypes from "prop-types";

function KegThumbnailList(props) {
	return (
		<React.Fragment>
			{props.kegList.map((keg) => 
        <KegThumbnail 
        whenKegClicked = { props.onKegSelection }
        whenPintPurchased = { props.onBuyingPint }
				name={keg.name}
				brand={keg.brand}
				price={keg.price}
        flavor={keg.flavor}
        pints={keg.pints}
        id={keg.id}/>
			)}
		</React.Fragment>
	);
}

KegThumbnailList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onBuyingPint: PropTypes.func
};


export default KegThumbnailList;