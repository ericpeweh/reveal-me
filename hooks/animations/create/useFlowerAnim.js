// Dependencies
import { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";

const useFlowersAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { transformOrigin: "bottom left" } });

		tl.to(".cflower1", {
			repeat: -1,
			rotate: 10,
			yoyo: true,
			yoyoEase: Power1.easeOut,
			duration: 10
		})
			.to(
				".cflower2",
				{
					repeat: -1,
					rotate: 5,
					yoyo: true,
					yoyoEase: Power1.easeOut,
					duration: 8
				},
				"<"
			)
			.to(
				".cflower3",
				{
					repeat: -1,
					rotate: 8,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 8
				},
				"<"
			)
			.to(
				".cflower4",
				{
					repeat: -1,
					rotate: 8,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 6
				},
				"<"
			)
			.to(
				".cflower5",
				{
					repeat: -1,
					rotate: 5,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 6
				},
				"<"
			);
	}, []);

	return;
};

export default useFlowersAnim;
