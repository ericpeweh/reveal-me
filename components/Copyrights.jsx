const Copyrights = ({ center }) => {
	return (
		<div
			className={`fixed font-poppins font-semibold text-textSecondary bottom-2 sm:bottom-4 left-4 text-sm sm:text-lg z-[20] ${
				!center ? "sm:left-8" : "left-1/2 -translate-x-1/2"
			}`}
		>
			App by{" "}
			<a
				href="https://linktr.ee/ericpeweh"
				className="text-primary"
				target="_blank"
				rel="noreferrer noopener"
			>
				ericpeweh
			</a>
		</div>
	);
};

export default Copyrights;
