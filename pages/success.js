// Dependencies
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

// Components
import Button from "../components/Button";

// Images
import SuccessSvg from "../components/SuccessSvg";

const Success = () => {
	const [msgLink, setMsgLink] = useState("");
	const router = useRouter();
	const link = router.query.link;

	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (link) {
			setMsgLink(link);
		}
	}, [link]);

	return (
		<>
			<Head>
				<title>Reveal-Me | Success</title>
				<meta name="description" content="Secret message for you to reveal" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<section className=" w-full h-screen">
				<div className="relative flex flex-row h-full mt-20">
					<div className="flex-1 relative h-full hidden lg:block">
						<SuccessSvg />
					</div>
					<div className="flex-1 flex flex-col justify-center">
						<div className="flex-1 flex flex-col justify-center px-5 sm:px-20 -mt-20">
							<h3 className="font-bold font-poppins text-2xl md:text-3xl text-center">
								Message successfully created!
							</h3>
							<div className="bg-gray rounded-xl w-full px-4 sm:px-8 py-3 mt-6">
								<p className="text-center font-poppins text-textSecondary">
									{msgLink || "No link found!"}
								</p>
							</div>
							<Button
								onClick={() => {
									setIsCopied(true);
									navigator.clipboard.writeText(msgLink || "No link found!");
								}}
								text={isCopied ? "Link copied" : "Click to copy link"}
								styles="font-poppins mt-4 font-semibold w-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Success;
