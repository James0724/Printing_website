import React, { useEffect } from 'react';

//Components
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Forms/ContactUs';
import HeroSection from './Components/HeroSection';
import GetStarted from './Components/Misc/GetStarted';
import Reviews from './Components/Misc/Reviews';
import TopBar from './Components/Navbar/Topbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Blog';

//Css
import './responsive.css';
import './App.css';
import 'aos/dist/aos.css';
import './icofont/icofont.css';

//Animations
import AOS from 'aos';

function App() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className="App">
			<TopBar />
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			<GetStarted />
			<Portfolio />
			<Reviews />
			<Blog />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
