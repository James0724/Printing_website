import React from 'react';

//imports
import Blog1 from '../../img/blog/blog-1.jpg';
import Blog2 from '../../img/blog/blog-2.jpg';
import Blog3 from '../../img/blog/blog-3.jpg';

import { PrimaryButton } from '../Misc/Button';

const Blog = () => {
	return (
		<>
			<section id="blog" class="recent-blog-posts">
				<div class="container aos-init aos-animate" data-aos="fade-up">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="heading-intro">
								<p>Recent Post from our Blog</p>
								<h3 class="text-uppercase">BLOG</h3>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-4">
							<div class="post-box">
								<div class="post-img">
									<img src={Blog1} class="img-fluid" alt="Blog" />
								</div>
								<span class="post-date">Tue, September 15</span>
								<h4 class="post-title">
									Eum ad dolor et. Autem aut fugiat debitis voluptatem
									consequuntur sit
								</h4>

								<PrimaryButton class="btn btn-brand btn-circle">
									Read More
								</PrimaryButton>
							</div>
						</div>

						<div class="col-lg-4">
							<div class="post-box">
								<div class="post-img">
									<img src={Blog2} class="img-fluid" alt="Blog" />
								</div>
								<span class="post-date">Fri, August 28</span>
								<h4 class="post-title">
									Et repellendus molestiae qui est sed omnis voluptates magnam
								</h4>
								<PrimaryButton class="btn btn-brand btn-circle">
									Read More
								</PrimaryButton>
							</div>
						</div>

						<div class="col-lg-4">
							<div class="post-box">
								<div class="post-img">
									<img src={Blog3} class="img-fluid" alt="Blog" />
								</div>
								<span class="post-date">Mon, July 11</span>
								<h4 class="post-title">
									Quia assumenda est et veritatis aut quae
								</h4>
								<PrimaryButton class="btn btn-brand btn-circle">
									Read More
								</PrimaryButton>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
