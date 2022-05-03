// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const useCloudAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(".cloud1", {
			x: 100,
			repeat: -1,
			yoyo: true,
			yoyoEase: Linear,
			duration: 20
		})
			.to(
				".cloud2",
				{
					x: -200,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 25
				},
				"<"
			)
			.to(
				".cloud3",
				{
					x: 100,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 25
				},
				"<"
			)
			.to(
				".cloud4",
				{
					x: -100,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 25
				},
				"<"
			)
			.to(
				".cloud5",
				{
					x: -100,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 25
				},
				"<"
			);
	}, []);

	return;
};

export default useCloudAnim;
