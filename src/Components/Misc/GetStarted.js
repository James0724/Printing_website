import React from 'react';

//imports
import { PrimaryButton } from './Button';
import Background from '../../img/contact-bg.jpg';

const GetStarted = () => {
	return (
		<>
			<section
				class="great-started section-padding margin-top-40"
				style={{ backgroundImage: `url(${Background})` }}
				data-aos="zoom-in-right">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="great-started-text text-center">
								<h2>Get the Best Solution for Your Business</h2>
								<PrimaryButton
									r="none"
									href="#"
									class="btn btn-brand wow fadeInUp"
									data-wow-duration="3000ms"
									data-wow-delay="100ms">
									Get Started
								</PrimaryButton>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default GetStarted;
