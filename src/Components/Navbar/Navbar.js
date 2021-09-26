import React, { useState, useEffect } from 'react';

//importing logo
import Logo from '../../img/logo/logo.png';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [show, setshow] = useState(false);

	const controlNavdrop = () => {
		if (window.scrollY > 10) {
			setshow(true);
		} else {
			setshow(false);
		}
	};
	const navStyle = {
		top: show ? 0 : '40px',
		transition: 'all 0.5s ease-in',
	};
	useEffect(() => {
		window.addEventListener('scroll', controlNavdrop);
		return () => {
			window.removeEventListener('scroll', controlNavdrop);
		};
	}, []);

	const onClickMobileMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<>
			<div class="navtop" style={navStyle}>
				<nav class={`bg-nav ${show && 'menu-bg'}`}>
					<div class="container d-flex align-items-center  justify-content-between">
						<a class="navbar-brand" href="index.html">
							<img src={Logo} alt="Logo" />
						</a>
						<div
							className={`navbar-toggle d-xl-none ${menuOpen ? 'opened' : ''}`}
							onClick={onClickMobileMenu}>
							<svg width="40" height="40" viewBox="0 0 100 100">
								<path
									class="line line1"
									d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
								/>
								<path class="line line2" d="M 20,50 H 80" />
								<path
									class="line line3"
									d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
								/>
							</svg>
						</div>
						<div
							className={`nav-items d-xl-block ${
								menuOpen ? 'nav-open' : 'nav-close'
							}`}>
							<div class="mobile-navbar">
								<ul class="navbar-nav">
									<li class="nav-item">
										<a class="nav-link active" href="#hero-area">
											Home
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#about">
											About Us
										</a>
									</li>

									<li class="nav-item">
										<a class="nav-link" href="#services">
											Services
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#portfolio">
											Portfolio
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#blog">
											Blogs
										</a>
									</li>

									<li class="nav-item">
										<a class="nav-link" href="#contact">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
