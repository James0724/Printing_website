import React from 'react';

//importing logo
import Logo from '../../img/logo/logo.png';
import LogoFooter from '../../img/logo/devlogo.png';

const Footer = () => {
	return (
		<>
			<footer id="footer" class="footer">
				<div class="footer-newsletter">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12 text-center">
								<h4>Our Newsletter</h4>
								<p>
									Tamen quem nulla quae legam multos aute sint culpa legam
									noster magna
								</p>
							</div>
							<div class="col-lg-6">
								<form action="" method="post">
									<input type="email" name="email" />
									<input type="submit" value="Subscribe" />
								</form>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-top">
					<div class="container">
						<div class="row gy-4">
							<div class="col-lg-5 col-md-12 footer-info">
								<a class="navbar-brand" href="index.html">
									<img src={Logo} alt="Logo" />
								</a>
								<p>
									We operate with the momentum statement whereby in matters
									concerning principles, we stand like a rock and in matters
									concerning to fashion we move with the current.
								</p>
								<div class="social-links mt-3">
									<a href="#!">
										<i class="icofont-facebook"></i>
									</a>
									<a href="#!">
										<i class="icofont-instagram"></i>
									</a>
									<a href="#!">
										<i class="icofont-linkedin"></i>
									</a>
									<a href="#!">
										<i class="icofont-brand-youtube"></i>
									</a>
								</div>
							</div>

							<div class="col-lg-2 col-6 footer-links">
								<h4>Useful Links</h4>
								<ul class="footer-link">
									<li>
										<a href="#hero-area">Home</a>
									</li>
									<li>
										<a href="#about">About us</a>
									</li>
									<li>
										<a href="#services">Services</a>
									</li>
									<li>
										<a href="#portfolio">Portfolio</a>
									</li>
								</ul>
							</div>

							<div class="col-lg-2 col-6 footer-links">
								<h4>Our Services</h4>
								<ul class="footer-link">
									<li>
										<p>Printing</p>
									</li>
									<li>
										<p>Web Development</p>
									</li>
									<li>
										<p>Content Writing</p>
									</li>
									<li>
										<p>Branding</p>
									</li>
									<li>
										<p>Graphic Design</p>
									</li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
								<h4>Contact Us</h4>
								<p>
									Nairobi <br />
									Kenya <br />
									<strong>Phone:</strong> 0724797790
									<br />
									<strong>Email:</strong> info@example.com
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="copyright">© Copyright 2021 All Rights Reserved</div>
					<div class="credits">
						Designed by
						<a class="footer-devlogo" href="#!">
							<img src={LogoFooter} alt="Logo" />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
