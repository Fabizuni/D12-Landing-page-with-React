import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex sticky-top">
			<a className="navbar-brand text-light" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link text-light" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light disabled" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
