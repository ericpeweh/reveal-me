// Dependencies
import { useState } from "react";
import Head from "next/head";

// Components
import InfoButton from "../components/InfoButton";
import Copyrights from "../components/Copyrights";
import Info from "../components/Info";
import HomeWriter from "../components/HomeWriter";

// Images
import HeroSvg from "../components/HeroSvg";

const Home = () => {
	const [showInfo, setShowInfo] = useState("init");

	const toggleInfoHandler = () => {
		setShowInfo(prev => (prev === "init" ? true : !prev));
	};

	return (
		<>
			<Head>
				<title>Reveal-Me | Homepage</title>
				<meta name="description" content="Secret message for you to reveal" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<section className="relative flex flex-col w-full h-screen">
				<HomeWriter />
				<div className="flex-1 relative w-full h-full">
					<HeroSvg />
				</div>
				<InfoButton onClick={toggleInfoHandler} />
				<Copyrights />
				<Info showInfo={showInfo} onClose={toggleInfoHandler} />
			</section>
		</>
	);
};

export default Home;
