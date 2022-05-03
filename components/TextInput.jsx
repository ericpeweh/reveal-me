import React from "react";

const TextInput = ({
	styles,
	id,
	label,
	placeholder,
	name,
	value,
	onChange,
	onBlur,
	errorText,
	optional
}) => {
	return (
		<div className={`my-4 w-full color-textPrimary flex flex-col ${styles}`}>
			<div className="mb-2 flex flex-row justify-between items-center">
				<label
					htmlFor={id}
					className="font-poppins font-semibold color-textPrimary text-sm sm:text-lg"
				>
					{label}{" "}
					{optional && <p className="font-poppins text-textSecondary text-xs inline">(Optional)</p>}
				</label>
				{errorText && (
					<p
						className={`font-poppins text-xs sm:text-sm -mb-2 ${
							value.length > 50 ? "text-primary" : "text-textSecondary"
						}`}
					>
						{errorText}
					</p>
				)}
			</div>
			<input
				type="text"
				name={name}
				id={id}
				placeholder={placeholder}
				className="rounded-xl px-4 py-3 color-textSecondary bg-gray font-poppins focus-visible:outline-primary text-xs sm:text-lg"
				value={value}
				onChange={e => onChange(name, e.target.value)}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default TextInput;
