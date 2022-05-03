// Dependencies
import { useEffect } from "react";
import gsap from "gsap";

const tl = gsap.timeline({
	defaults: { transformOrigin: "bottom center" }
});

const resetTl = gsap.timeline({ defaults: { transformOrigin: "bottom center" } });

const useFlowersAnim = isTyping => {
	// Writing
	useEffect(() => {
		if (isTyping && !tl.isActive()) {
			tl.to(".hand", {
				rotate: -10,
				duration: 1
			})
				.to(".hand", {
					rotate: -12,
					duration: 0.4
				})
				.to(".hand", {
					rotate: -8,
					duration: 0.4
				})
				.to(".hand", {
					rotate: -15,
					duration: 0.4
				})
				.to(".hand", {
					rotate: -10,
					duration: 0.4
				});
		}
	}, [isTyping]);

	// Reset (finished writting)
	useEffect(() => {
		if (!isTyping && !resetTl.isActive() && !tl.isActive()) {
			resetTl.to(".hand", {
				rotate: 0,
				duration: 1,
				delay: 5
			});
		}
	}, [isTyping]);

	return;
};

export default useFlowersAnim;
