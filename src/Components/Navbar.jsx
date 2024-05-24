import { useState } from "react";
import DropDown from "./DropDown";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const [open1, setOpen1] = useState(true);
	const [open2, setOpen2] = useState(true);

	const [mobileNav, setMobileNav] = useState(true);

	const toggleBtn1 = () => {
		setOpen1((prevState) => !prevState);
	};
	const toggleBtn2 = () => {
		setOpen2((prevState) => !prevState);
	};
	const mobileNavBtn = () => {
		setMobileNav((prevState) => !prevState);
	};
	return (
		<nav className="items-center mx-auto p-5 px-8">
			<div className="flex md:flex-row md:items-center md:justify-between justify-between text-MediumGray">
				<div className="flex justify-around space-x-10 items-center">
					{/* Logo */}
					<div className=" items-start md:items-center">
						<img src="./src/assets/images/logo.svg" alt="" />
					</div>

					{/* Drop-Down */}
					<div className="hidden md:flex md:justify-between md:space-x-10 font-semibold">
						<button
							onClick={toggleBtn1}
							className="hover:font-bold hover:text-AlmostBlack inline-flex space-x-3">
							<span>Features</span>
							{open1 ? (
								<img
									src="./src/assets/images/icon-arrow-down.svg"
									alt=""
									className="mt-2"
								/>
							) : (
								<img
									src="./src/assets/images/icon-arrow-up.svg"
									alt=""
									className="mt-2"
								/>
							)}
						</button>
						<button
							onClick={toggleBtn2}
							className="hover:font-bold hover:text-AlmostBlack inline-flex space-x-3">
							<span>Company</span>
							{open2 ? (
								<img
									src="./src/assets/images/icon-arrow-down.svg"
									alt=""
									className="mt-2"
								/>
							) : (
								<img
									src="./src/assets/images/icon-arrow-up.svg"
									alt=""
									className="mt-2"
								/>
							)}
						</button>
						<button className="hover:font-bold hover:text-AlmostBlack">
							Careers
						</button>
						<button className="hover:font-bold hover:text-AlmostBlack">
							About
						</button>
					</div>
				</div>

				<div className="md:space-x-10 hidden md:flex  md:items-center font-semibold">
					<a
						href=""
						className="hover:font-bold hover:text-AlmostBlack">
						Login
					</a>
					<a
						href=""
						className=" border-2 rounded-xl border-MediumGray px-5 py-2 hover:border-AlmostBlack hover:text-AlmostBlack hover:font-bold">
						Register
					</a>
				</div>

				{/* Mobile Nav */}
				<div className="md:hidden items-end flex">
					<button
						onClick={mobileNavBtn}
						className="bg-transparent z-10">
						{mobileNav ? (
							<img
								src="./src/assets/images/icon-menu.svg"
								alt=""
							/>
						) : (
							<img
								src="./src/assets/images/icon-close-menu.svg"
								alt=""
							/>
						)}
					</button>
				</div>
			</div>
			<DropDown open1={open1} open2={open2} />
			<MobileNav mobileNav={mobileNav} />
		</nav>
	);
};

export default Navbar;
