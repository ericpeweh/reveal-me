// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const useStarsAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { transformOrigin: "center" } });

		tl.to(".star1", {
			opacity: 0,
			repeat: -1,
			rotate: 180,
			yoyo: true,
			yoyoEase: Linear,
			duration: 1
		})
			.to(
				".star2",
				{
					opacity: 0,
					repeat: -1,
					rotate: 180,
					yoyo: true,
					yoyoEase: Linear,
					duration: 1.2
				},
				"-=1"
			)
			.to(".star3", {
				opacity: 0,
				repeat: -1,
				rotate: 180,
				yoyo: true,
				yoyoEase: Linear,
				duration: 0.8
			})
			.to(
				".star4",
				{
					opacity: 0,
					repeat: -1,
					rotate: 180,
					yoyo: true,
					yoyoEase: Linear,
					duration: 1.1
				},
				"-=2"
			)
			.to(
				".star5",
				{
					opacity: 0,
					repeat: -1,
					rotate: 180,
					yoyo: true,
					yoyoEase: Linear,
					duration: 1
				},
				"-=2"
			)
			.to(".star6", {
				opacity: 0,
				repeat: -1,
				rotate: 180,
				yoyo: true,
				yoyoEase: Linear,
				duration: 1.5
			});
	}, []);

	return;
};

export default useStarsAnim;
