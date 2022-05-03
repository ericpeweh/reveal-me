// Dependencies
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const HomeWriter = () => {
	useEffect(() => {
		new Typewriter("#homepageWriter", {
			strings: ["To be honest...", "Hi! Hello!", "I'm sorry...", "Just want you to know..."],
			autoStart: true,
			loop: true
		});
	}, []);

	return (
		<p
			id="homepageWriter"
			className="fixed top-[25%] sm:top-[40%] translate-y-1/2 text-xl lg:text-3xl z-[25] text-center sm:text-left w-full sm:ml-[10%] tracking-wide"
		></p>
	);
};

export default HomeWriter;
