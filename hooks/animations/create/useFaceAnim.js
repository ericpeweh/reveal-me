// Dependencies
import { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";

const useFaceAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { transformOrigin: "center", repeat: -1, repeatDelay: 4 }
		});

		tl.to(".eyeleft", {
			scaleY: 0,
			duration: 0.2
		})
			.to(".eyeleft", {
				scaleY: 1,
				duration: 0.2
			})
			.to(
				".eyeright",
				{
					scaleY: 0,
					duration: 0.2
				},
				"-=0.4"
			)
			.to(".eyeright", {
				scaleY: 1,
				duration: 0.2
			});
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { transformOrigin: "center", repeat: -1, repeatDelay: 4, yoyo: true }
		});

		tl.to(".mouth", {
			duration: 0.5,
			x: 3
		}).to(
			".mouth",
			{
				duration: 0.5,
				y: 3
			},
			"<"
		);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { transformOrigin: "right top", repeat: -1, repeatDelay: 1, yoyo: true }
		});

		tl.to(".hair-left", {
			duration: 5,
			x: 5,
			rotate: 3
		}).to(
			".hair-left",
			{
				duration: 5,
				y: 5
			},
			"<"
		);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { transformOrigin: "left top", repeat: -1, repeatDelay: 1, yoyo: true }
		});

		tl.to(".hair-right", {
			duration: 5,
			x: 5,
			rotate: 3
		}).to(
			".hair-right",
			{
				duration: 5,
				y: 5
			},
			"<"
		);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { transformOrigin: "center", repeat: -1, repeatDelay: 4, yoyo: true }
		});

		tl.to(".eyelash-right", {
			duration: 0.5,
			y: 5
		}).to(
			".eyelash-left",
			{
				duration: 0.5,
				y: 5
			},
			"<"
		);
	}, []);

	return;
};

export default useFaceAnim;
