// Dependencies
import { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";

const useWaterAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(".water", {
			x: 200,
			repeat: -1,
			yoyo: true,
			yoyoEase: Linear,
			duration: 10
		})
			.to(
				".water_2",
				{
					x: -180,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 10
				},
				"<"
			)
			.to(
				".water_3",
				{
					x: 150,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 15
				},
				"<"
			)
			.to(
				".water_4",
				{
					x: 100,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 8
				},
				"<"
			)
			.to(
				".water_5",
				{
					x: -85,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 6
				},
				"<"
			)
			.to(
				".water_6",
				{
					x: 160,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 13
				},
				"<"
			)
			.to(
				".water_7",
				{
					x: -150,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 9
				},
				"<"
			)
			.to(
				".water_8",
				{
					x: 80,
					repeat: -1,
					yoyo: true,
					yoyoEase: Linear,
					duration: 8
				},
				"<"
			);
	}, []);

	return;
};

export default useWaterAnim;
