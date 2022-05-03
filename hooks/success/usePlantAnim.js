// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const usePlantAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { transformOrigin: "bottom center" } });

		tl.to(".plant1", {
			repeat: -1,
			rotate: 15,
			yoyo: true,
			yoyoEase: Linear,
			duration: 2
		}).to(".plant2", {
			repeat: -1,
			rotate: 12,
			yoyo: true,
			yoyoEase: Linear,
			duration: 2
		});
	}, []);

	return;
};

export default usePlantAnim;
