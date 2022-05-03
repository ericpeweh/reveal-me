// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const useFlagAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { transformOrigin: "left center" } });

		tl.to(".flag", {
			repeat: -1,
			x: -5,
			y: 5,
			yoyo: true,
			yoyoEase: Linear,
			duration: 2
		}).to(".flag", {
			repeat: -1,
			x: 0,
			y: 4,
			yoyo: true,
			yoyoEase: Linear,
			duration: 2
		});
	}, []);

	return;
};

export default useFlagAnim;
