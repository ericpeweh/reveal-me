// Dependencies
import { useEffect } from "react";
import gsap, { Linear } from "gsap";

const useCheckAnim = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { transformOrigin: "left center" } });

		tl.to(".bubble", {
			strokeDashoffset: 0,
			duration: 2
		});

		tl.to(
			".check",
			{
				strokeDashoffset: 0,
				duration: 1.5
			},
			"-=1.5"
		).to(
			".check",
			{
				fill: "#FD4F5C"
			},
			"-=0.5"
		);
	}, []);

	return;
};

export default useCheckAnim;
