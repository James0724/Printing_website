import React from 'react';

const Features = () => {
	return (
		<>
			<div class="container">
				<div class="row">
					<h4 class="small_title">Our Core Features</h4>
					<div class="col-md-4">
						<div class="card">
							<div class="box">
								<div class="content">
									<h2>01</h2>
									<h3 class="color_primary">T-shirt Printing</h3>
									<p>
										Get personalized branded t-shirts and much more custom
										branded products for you and your business at an affordable
										rate.
									</p>
									<button className="primaryBtn">Read More</button>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="card">
							<div class="box">
								<div class="content">
									<h2>02</h2>
									<h3 class="color_secondary">Branding</h3>
									<p>
										Design high-quality merchandise products that represent your
										business keeping you visible and out standing.
									</p>
									<button className="primaryBtn1">Read More</button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card">
							<div class="box">
								<div class="content">
									<h2>03</h2>
									<h3 class="color_tertiary">Content Writing</h3>
									<p>
										Our team will create engaging, effective content for ads,
										blogs, bios, websites, and anything else you need.
									</p>
									<button className="primaryBtn2">Read More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
