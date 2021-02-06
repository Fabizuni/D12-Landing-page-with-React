import React from "react";
import PropTypes from "prop-types";

export const Carousel = props => {
	return (
		<div className="card" style={{ width: "100%" }}>
			<img
				className="card-img-top"
				src="https://www.beautycolorcode.com/cdcdcd-2880x1800.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Carousel.propTypes = {};

export default Carousel;
