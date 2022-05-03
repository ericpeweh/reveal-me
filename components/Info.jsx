// Dependencies
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// Images
import closeIcon from "../public/images/close.png";

const Overlay = () => {
	return <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 z-[20]"></div>;
};

const Modal = ({ showInfo, onClose }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (showInfo !== "init") {
			if (showInfo) {
				gsap.to(modalRef.current, {
					scale: 1,
					autoAlpha: 1,
					duration: 0.4,
					ease: "elastic.out(1.2, 0.75)"
				});
			} else {
				gsap.to(modalRef.current, {
					scale: 0,
					autoAlpha: 0,
					duration: 1,
					ease: "elastic.out(1, 1)"
				});
			}
		}
	}, [showInfo]);

	return (
		<div
			className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-2/3 lg:w-5/12 h-2/6 bg-secondary/90 rounded-xl p-8 flex flex-col z-[25] invisible scale-0"
			ref={modalRef}
		>
			<button className="absolute top-2 right-2" onClick={onClose}>
				<Image src={closeIcon} alt="closeIcon" width={50} height={50} />
			</button>
			<h3 className="text-white text-xl sm:text-2xl text-center tracking-widest">Credits</h3>
			<div className="flex flex-1 justify-center items-center">
				<p className="text-white font-poppins font-semibold text-center text-sm sm:text-lg">
					Illustration designed by{" "}
					<a
						className="text-primary"
						href="https://www.freepik.com/stories"
						target="_blank"
						rel="noreferrer noopener"
					>
						stories
					</a>{" "}
					on Freepik
				</p>
			</div>
		</div>
	);
};

const Info = ({ showInfo, onClose }) => {
	return (
		<>
			<Modal showInfo={showInfo} onClose={onClose} />
			{showInfo && showInfo !== "init" && <Overlay showInfo={showInfo} />}
		</>
	);
};

export default Info;
