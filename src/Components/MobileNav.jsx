import { useState } from "react";
import MobileDropDown1 from "./MobileDropDown1";
import MobileDropDown2 from "./MobileDropDown2";
const MobileNav = (props) => {
	const [mobileDropDown1, setMobileDropDown1] = useState(true);
	const [mobileDropDown2, setMobileDropDown2] = useState(true);

	const mobileToggleBtn1 = () => {
		setMobileDropDown1((prevState) => !prevState);
	};
	const mobileToggleBtn2 = () => {
		setMobileDropDown2((prevState) => !prevState);
	};
	return (
		<div className="relative">
			{props.mobileNav ? (
				<div className="bg-AlmostWhite h-screen p-8 pt-28  text-MediumGray font-semibold shadow-2xl w-64 fixed -top-1 right-0 md:hidden hidden ">
					<div className="flex flex-col space-y-3 items-start justify-between">
						<button
							onClick={mobileToggleBtn1}
							className="hover:font-bold inline-flex space-x-3">
							<span>Features</span>
							{mobileDropDown1 ? (
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
							<MobileDropDown1
								mobileDropDown1={mobileDropDown1}
							/>
						</button>

						<button
							onClick={mobileToggleBtn2}
							className=" inline-flex space-x-3">
							<span>Company</span>
							{mobileDropDown2 ? (
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
							<MobileDropDown2
								mobileDropDown2={mobileDropDown2}
							/>
						</button>
						<button className="">Careers</button>
						<button className="">About</button>
					</div>
					<div className="space-y-2 flex flex-col md:hidden text-center">
						<a href="" className="">
							Login
						</a>
						<a
							href=""
							className=" border-2 rounded-xl border-MediumGray px-5 py-2">
							Register
						</a>
					</div>
				</div>
			) : (
				<div className="bg-AlmostWhite h-screen p-8 pt-28  text-MediumGray font-semibold shadow-2xl w-64 fixed -top-1 right-0 md:hidden block ">
					<div className="flex flex-col space-y-3 items-start justify-between">
						<button
							onClick={mobileToggleBtn1}
							className="hover:font-bold inline-flex space-x-3">
							<span>Features</span>
							{mobileDropDown1 ? (
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
							<MobileDropDown1
								mobileDropDown1={mobileDropDown1}
							/>
						</button>

						<button
							onClick={mobileToggleBtn2}
							className=" inline-flex space-x-3">
							<span>Company</span>
							{mobileDropDown2 ? (
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
							<MobileDropDown2
								mobileDropDown2={mobileDropDown2}
							/>
						</button>
						<button className="">Careers</button>
						<button className="">About</button>
					</div>
					<div className="space-y-2 flex flex-col md:hidden text-center">
						<a href="" className="">
							Login
						</a>
						<a
							href=""
							className=" border-2 rounded-xl border-MediumGray px-5 py-2">
							Register
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
