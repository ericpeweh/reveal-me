// Images
import SpinnerSvg from "./SpinnerSvg";

const Button = ({ text, styles, onClick, disabled, isSubmitting }) => {
	return (
		<button
			type="button"
			className={`rounded-xl bg-primary text-sm sm:text-lg text-white text-center flex justify-center items-center h-12 drop-shadow-md ${styles} ${
				disabled && "bg-neutral-400 cursor-not-allowed"
			}`}
			onClick={disabled ? () => {} : onClick}
			disabled={disabled}
		>
			{isSubmitting ? <SpinnerSvg /> : text}
		</button>
	);
};

export default Button;
