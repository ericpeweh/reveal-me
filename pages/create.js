// Dependencies
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

// Images
import CreateSvg from "../components/CreateSvg";

// Components
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const MAX_CHARS = 60;

const Create = () => {
	const router = useRouter();

	const [message, setMessage] = useState({
		shownText: "",
		invisibleText: "",
		author: "",
		receiver: ""
	});
	const [isTyping, setIsTyping] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isError, setIsError] = useState(false);

	const changeHandler = (name, value) => {
		setIsTyping(prev => (!prev ? true : prev));
		setMessage(prev => ({ ...prev, [name]: value }));
	};

	const finishTypingHandler = () => {
		setIsTyping(false);
	};

	// Validation
	const shownText = message.shownText;
	const invisibleText = message.invisibleText;
	useEffect(() => {
		if (
			shownText.length > MAX_CHARS ||
			invisibleText.length > MAX_CHARS ||
			shownText.length < 1 ||
			invisibleText.length < 1
		) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	}, [shownText, invisibleText]);

	const submitHandler = async () => {
		setIsError(false);
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/create", {
				method: "POST",
				"Content-Type": "application/json",
				body: JSON.stringify(message)
			});
			const data = await res.json();

			router.push(`success?link=${data.link}`);
		} catch (error) {
			setIsError(true);
		}
		setIsSubmitting(false);
	};

	return (
		<>
			<Head>
				<title>Reveal-Me | Create</title>
				<meta name="description" content="Create and share your reveal message" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className=" w-full h-screen overflow-y-scroll">
				<div className="relative flex flex-row h-full mt-28">
					<div className="flex-1 relative h-full hidden lg:block">
						<div className="relative h-full">
							<CreateSvg isTyping={isTyping} />
						</div>
					</div>
					<div className="flex-1">
						<div className="px-4 md:pr-10 md:pl-10 lg:pl-20">
							<h2 className="font-poppins font-bold text-xl sm:text-3xl mb-6">Create Message</h2>
							<TextInput
								styles="mb-6"
								id="shownText"
								label="Shown text"
								placeholder="To be honest..."
								name="shownText"
								errorText={`Max ${MAX_CHARS} characters`}
								value={message.shownText}
								onChange={changeHandler}
								onBlur={finishTypingHandler}
							/>
							<TextInput
								styles=""
								id="invisibleText"
								label="Invisible text"
								placeholder="you have completed my missing piece."
								name="invisibleText"
								errorText={`Max ${MAX_CHARS} characters`}
								value={message.invisibleText}
								onChange={changeHandler}
								onBlur={finishTypingHandler}
							/>
							<hr className="my-6 border-gray-MAX_CHARS" />
							<TextInput
								styles="mb-6"
								id="author"
								label="Author"
								placeholder="Anonymous"
								name="author"
								value={message.author}
								onChange={changeHandler}
								onBlur={finishTypingHandler}
								optional
							/>
							<TextInput
								styles=""
								id="receiver"
								label="Receiver"
								placeholder="Receiver name"
								name="receiver"
								value={message.receiver}
								onChange={changeHandler}
								onBlur={finishTypingHandler}
								optional
							/>
							{isError && (
								<p className="font-poppins text-red-500 mb-0">
									Something went wrong, failed to create new message!{" "}
								</p>
							)}
							<Button
								text="Create message"
								styles="mt-8 py-3 tracking-widest sm:text-lg w-full"
								disabled={!isValid}
								isSubmitting={isSubmitting}
								onClick={submitHandler}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Create;
