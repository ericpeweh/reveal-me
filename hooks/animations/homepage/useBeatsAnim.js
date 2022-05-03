// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const useBeatsAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(".music1", {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			yoyoEase: Linear,
			duration: 2
		})
			.to(
				".music2",
				{
					opacity: 0,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 2
				},
				"-=1"
			)
			.to(".music3", {
				opacity: 0,
				repeat: -1,
				yoyo: true,
				yoyoEase: Linear,
				duration: 3
			})
			.to(
				".music4",
				{
					opacity: 0,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 3
				},
				"-=2"
			);
	}, []);

	return;
};

export default useBeatsAnim;
