import React from "react";

const MobileDropDown2 = (props) => {
	return (
		<div>
			<div className="-ml-24 mt-6">
				{props.mobileDropDown2 ? (
					<div className="hidden bg-AlmostWhite p-4 px-6 rounded-md    max-w-40 space-y-3 text-MediumGray font-medium">
						<li className="list-none">History</li>
						<li className="list-none">Our Team</li>
						<li className="list-none">Blog</li>
					</div>
				) : (
					<div className="bg-AlmostWhite p-4 px-6 rounded-md  max-w-40 space-y-3 md:hidden block text-MediumGray font-medium">
						<li className="list-none">History</li>
						<li className="list-none">Our Team</li>
						<li className="list-none">Blog</li>
					</div>
				)}
			</div>
		</div>
	);
};

export default MobileDropDown2;
