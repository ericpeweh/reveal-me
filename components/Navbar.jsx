// Dependencies
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Images
import logo from "../public/images/logo.png";
import backIcon from "../public/images/back.png";

const Navbar = () => {
	const router = useRouter();

	const isHomepage = router.pathname === "/";
	const isCreate = router.pathname === "/create";
	const isSuccess = router.pathname === "/success";

	return (
		<div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 py-4 sm:px-10 sm:py-8 fixed top-0 left-0 z-[10]">
			<div
				className={`lg:w-[180px] w-[150px] ${!isHomepage ? "hidden" : ""} sm:block mt-4 sm:mt-0`}
			>
				<Image src={logo} alt="logo" layout="responsive" />
			</div>
			{(isHomepage || isCreate || isSuccess) && (
				<Link href={isCreate || isSuccess ? "/" : "/create"} passHref>
					<button
						type="button"
						className={`bg-gray-400 rounded-xl bg-primary px-6 py-2 hover:bg-secondary transition-all mt-3 sm:mt-0 ${
							!isHomepage ? "self-start" : "self-auto"
						} `}
					>
						<div className="tracking-widest lg:text-lg text-md text-white">
							{isCreate || isSuccess ? (
								<div className="flex flex-row justify-between items-center">
									<Image src={backIcon} alt="backIcon" height={25} width={25} />{" "}
									<p className="ml-2">Homepage</p>
								</div>
							) : (
								"Create Message"
							)}
						</div>
					</button>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
