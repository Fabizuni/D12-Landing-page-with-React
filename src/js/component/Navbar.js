import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active text-light" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-link text-light" href="#">
							About
						</a>
						<a className="nav-link text-light" href="#">
							Services
						</a>
						<a
							className="nav-link disabled text-light"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {};

export default Navbar;
