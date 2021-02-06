import React from "react";
import PropTypes from "prop-types";

export const Header = props => {
	return (
		<div className="jumbotron mt-3">
			<h1 className="display-4 text-left">A Warm Welcome!</h1>
			<p className="lead text-left">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text
				ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book.
			</p>
			<a
				className="btn btn-primary btn-lg float-left"
				href="#"
				role="button">
				Call to action!
			</a>
		</div>
	);
};

Header.propTypes = {};

export default Header;
