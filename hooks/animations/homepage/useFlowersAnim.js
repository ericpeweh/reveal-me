// Dependencies
import { useEffect } from "react";
import gsap, { Power1 } from "gsap";

const useFlowersAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				transformOrigin: "bottom bottom"
			}
		});

		tl.to(".p1-l1", {
			repeat: -1,
			rotate: 10,
			yoyo: true,
			yoyoEase: Power1.easeOut,
			duration: 10
		})
			.to(
				".p1-l2",
				{
					repeat: -1,
					rotate: -5,
					yoyo: true,
					yoyoEase: Power1.easeOut,
					duration: 8
				},
				"<"
			)
			.to(
				".p1-l3",
				{
					repeat: -1,
					rotate: -5,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 5
				},
				"<"
			)
			.to(
				".p1-l4",
				{
					repeat: -1,
					rotate: 12,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 6
				},
				"<"
			);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				transformOrigin: "bottom bottom"
			}
		});

		tl.to(".p2-l1", {
			repeat: -1,
			rotate: 10,
			yoyo: true,
			yoyoEase: Power1.easeOut,
			duration: 10
		})
			.to(
				".p2-l2",
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
				".p2-l3",
				{
					repeat: -1,
					rotate: 10,
					yoyo: true,
					yoyoEase: Power1.easeIn,
					duration: 5
				},
				"<"
			)
			.to(
				".p2-l4",
				{
					repeat: -1,
					rotate: 12,
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
