import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav
			style={{ height: "100px" }}
			className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
			<a className="navbar-brand text-white" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<a className="nav-link active text-light" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-link active text-light" href="#">
						About
					</a>
					<a className="nav-link active text-light" href="#">
						Services
					</a>
					<a
						className="nav-link active text-light"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
