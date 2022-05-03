// Dependencies
import Image from "next/dist/client/image";

// Images
import infoIcon from "../public/images/info.png";

const InfoButton = ({ onClick }) => {
	return (
		<button
			type="button"
			className="fixed bottom-0 right-2 sm:bottom-4 sm:right-8"
			onClick={onClick}
		>
			<Image src={infoIcon} alt="infoIcon" width={50} height={50} />
		</button>
	);
};

export default InfoButton;
