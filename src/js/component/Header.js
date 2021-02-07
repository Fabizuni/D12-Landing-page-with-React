import React from "react";
import PropTypes from "prop-types";

export const Header = props => {
	return (
		<div className="jumbotron mt-3 text-left">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead mt-5">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text
				ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<a className="btn btn-primary btn-lg mt-5" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};

Header.propTypes = {};

export default Header;
