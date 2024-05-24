import React from "react";

const MobileDropDown1 = (props) => {
	return (
		<div className="">
			<div className="-ml-24 mt-6">
				{props.mobileDropDown1 ? (
					<div className="hidden bg-AlmostWhite p-4 px-6   max-w-40 space-y-3 text-MediumGray font-medium">
						<li className="list-none  inline-flex items-center space-x-4 ">
							<img
								src=".\src\assets\images\icon-todo.svg"
								alt=""
							/>
							<span>Todo List</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-calendar.svg"
								alt=""
							/>
							<span>Calendar</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-reminders.svg"
								alt=""
							/>
							<span>Reminders</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-planning.svg"
								alt=""
							/>
							<span>Planning</span>
						</li>
					</div>
				) : (
					<div className="bg-AlmostWhite p-4 px-6 rounded-md  max-w-40 space-y-3 text-MediumGray font-medium  md:block ">
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-todo.svg"
								alt=""
							/>
							<span>Todo List</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-calendar.svg"
								alt=""
							/>
							<span>Calendar</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-reminders.svg"
								alt=""
							/>
							<span>Reminders</span>
						</li>
						<li className="list-none  inline-flex items-center space-x-4">
							<img
								src=".\src\assets\images\icon-planning.svg"
								alt=""
							/>
							<span>Planning</span>
						</li>
					</div>
				)}
			</div>
		</div>
	);
};

export default MobileDropDown1;
