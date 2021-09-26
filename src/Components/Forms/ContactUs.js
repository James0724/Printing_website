import React from 'react';

import { PrimaryButton } from '../Misc/Button';

const ContactUs = () => {
	return (
		<>
			<section id="contact" class="contact-area padd-btm-100">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="heading-intro">
								<p>Don't Waste your time !</p>
								<h3 class="text-uppercase">Contact us</h3>
							</div>
						</div>
					</div>
					<div class="row justify-content-center gy-4">
						<div class="col-lg-6">
							<div class="row gy-4">
								<div class="col-md-6">
									<div class="info-box">
										<i class="icofont-earth"></i>
										<h3>Address</h3>
										<p>
											Nairobi
											<br />
											Kenya
										</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="info-box">
										<i class="icofont-phone"></i>
										<h3>Call Us</h3>
										<p>
											O726140825
											<br />
											0724797790
										</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="info-box">
										<i class="icofont-email"></i>
										<h3>Email Us</h3>
										<p>
											info@example.com
											<br />
											contact@example.com
										</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="info-box">
										<i class="icofont-clock-time"></i>
										<h3>Open Hours</h3>
										<p>
											Monday - Friday
											<br />
											9:00AM - 05:00PM
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<form
								id="contactForm"
								class="contact-form data-aos aos-init"
								data-aos="fade-up"
								action="form-process.php"
								method="post">
								<div class="row">
									<div class="col-md-6 form-group">
										<input
											id="name"
											class="form-control"
											type="text"
											name="name"
											placeholder="Name"
											required=""
										/>
									</div>
									<div class="col-md-6 form-group">
										<input
											id="email"
											class="form-control"
											type="email"
											name="email"
											placeholder="Email"
											required=""
										/>
									</div>
									<div class="col-md-12 form-group">
										<input
											id="subject"
											class="form-control"
											type="text"
											name="subject"
											placeholder="Subject"
											required=""
										/>
									</div>
									<div class="col-md-12 form-group">
										<textarea
											id="message"
											name="message"
											class="form-control"
											placeholder="Message"
											rows="7"
											required=""></textarea>
									</div>
									<div class="col-md-12 text-center">
										<PrimaryButton
											class="btn btn-brand btn-circle"
											id="form-submit"
											type="submit"
											value="Submit">
											{' '}
											Submit Now
										</PrimaryButton>
									</div>
									<div class="col-md-12 text-center">
										<p class="input-success">
											We have received your mail, We will get back to you soon!
										</p>
										<p class="input-error">
											Sorry, Message could not send! Please try again.
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
