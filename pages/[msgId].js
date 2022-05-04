/* eslint-disable react/no-unescaped-entities */
// Dependencies
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Typewriter from "typewriter-effect/dist/core";

// Components
import Copyrights from "../components/Copyrights";
import Button from "../components/Button";

const Message = () => {
	const router = useRouter();
	const { msgId } = router.query;

	const [reveal, setReveal] = useState(false);
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		const fetchMessage = async () => {
			setIsLoading(true);

			const res = await fetch(`/api/post/${msgId}`);
			const data = await res.json();
			setMessage(data.message);

			if (data.message === "Message not found!") {
				setIsError(true);
			}

			setIsLoading(false);
		};

		if (msgId) {
			fetchMessage();
		}
	}, [msgId]);

	useEffect(() => {
		if (reveal) {
			new Typewriter("#writer", {
				strings: [message.invisibleText],
				autoStart: true,
				pauseFor: Number.MAX_SAFE_INTEGER,
				cursor: ""
			});
		}
	}, [reveal, message]);

	return (
		<>
			<Head>
				<title>Reveal Message!</title>
				<meta name="description" content="Secret message for you to reveal" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Copyrights center />
			<section className="flex justify-center items-center h-screen flex-col relative">
				{!isError && message && (
					<>
						<p className="text-center font-poppins font-bold text-2xl sm:text-3xl w-4/6">
							{message.shownText} <span className="text-textSecondary" id="writer"></span>
						</p>
						<div className="absolute top-2 right-4 sm:top-4 sm:right-6">
							<p className="font-poppins mt-4 text-sm sm:text-md">
								from <strong>{message.author || "Anonymous"}</strong> to{" "}
								<strong>{message.receiver || "You"}</strong>
							</p>
						</div>
						{!reveal && (
							<Button
								text="Click to reveal"
								styles="w-auto px-8 py-2 font-poppins font-semibold text-sm mt-4"
								onClick={() => {
									setReveal(true);
								}}
							/>
						)}
					</>
				)}
				{(isError || isLoading) && (
					<p className="text-center font-poppins font-bold text-2xl sm:text-3xl w-4/6">
						{isError ? "No message found!" : "Loading..."}
					</p>
				)}
			</section>
		</>
	);
};

export default Message;
