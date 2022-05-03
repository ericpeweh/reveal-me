// Dependencies
import { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";

const useBirdsAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(".bird1", {
			y: 40,
			x: -25,
			repeat: -1,
			yoyo: true,
			yoyoEase: Linear,
			duration: 10
		});

		tl.to(
			".bird2",
			{
				y: 20,
				x: -20,
				repeat: -1,
				yoyo: true,
				yoyoEase: Linear,
				duration: 12
			},
			"-=8"
		);

		tl.to(
			".bird3",
			{
				y: 25,
				x: 10,
				repeat: -1,
				yoyo: true,
				yoyoEase: Linear,
				duration: 8
			},
			"<"
		).to(".bird3", {
			y: -25,
			repeat: -1,
			yoyo: true,
			yoyoEase: Linear,
			duration: 5
		});
	}, []);

	useEffect(() => {
		const tl = gsap.timeline();

		tl.set(".wing", {
			transformOrigin: "left center"
		}).to(".wing", {
			rotate: 25,
			duration: 1,
			delay: 5,
			repeatDelay: 5,
			repeat: -1,
			yoyoEase: Power1.easeOut,
			yoyo: true
		});
	}, []);

	return;
};

export default useBirdsAnim;
