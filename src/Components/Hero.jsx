import React from "react";

const Hero = () => {
	return (
		<div className="md:mt-16 mt-10 md:px-28 container pb-10">
			<div className="flex flex-col-reverse md:flex-row justify-between space-x-6 flex-1">
				<div className="md:space-y-10 mt-20 space-y-3">
					<h1 className="hidden md:block text-7xl text-AlmostBlack font-bold">
						Make
						<br />
						Remote Work
					</h1>
					<h1 className="md:hidden text-4xl text-AlmostBlack font-bold text-center">
						Make Remote Work
					</h1>
					<p className="font-semibold text-MediumGray md:max-w-sm text-center md:text-start">
						Get your team in sync, no matter your location.
						Streamline process, create team rituals, and watch
						productivity soar
					</p>
					<div className="pt-4 text-center  md:text-start">
						<a
							href=""
							className="bg-AlmostBlack text-AlmostWhite rounded-xl  px-8 py-4 hover:border-MediumGray hover:bg-transparent hover:text-AlmostBlack hover:border-2 font-semibold">
							Learn More
						</a>
					</div>

					<div className="flex items-center justify-between pt-12 px-4 md:px-0">
						<img
							src=".\src\assets\images\client-audiophile.svg"
							alt=""
						/>
						<img
							src=".\src\assets\images\client-databiz.svg"
							alt=""
						/>
						<img
							src=".\src\assets\images\client-maker.svg"
							alt=""
						/>
						<img src=".\src\assets\images\client-meet.svg" alt="" />
					</div>
				</div>

				<div className=" flex items-center justify-center ">
					<img
						src=".\src\assets\images\image-hero-desktop.png"
						alt=""
						className="w-96 hidden md:block"
					/>
					<img
						src=".\src\assets\images\image-hero-mobile.png"
						alt=""
						className="w-96 h-max md:hidden"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
