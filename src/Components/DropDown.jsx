const DropDown = (props) => {
	return (
		<div className="flex space-x-6 px-16 relative">
			<div className=" absolute left-16 ">
				{props.open1 ? (
					<div className="hidden bg-AlmostWhite p-4 px-6 rounded-md shadow-lg  max-w-40 space-y-3 text-MediumGray font-medium">
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
				) : (
					<div className="bg-AlmostWhite p-4 px-6 rounded-md shadow-lg max-w-40 space-y-3 text-MediumGray font-medium  md:block hidden">
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
			<div className="absolute left-60">
				{props.open2 ? (
					<div className="hidden bg-AlmostWhite p-4 px-6 rounded-md shadow-lg   max-w-40 space-y-3 text-MediumGray font-medium">
						<li className="list-none">History</li>
						<li className="list-none">Our Team</li>
						<li className="list-none">Blog</li>
					</div>
				) : (
					<div className="bg-AlmostWhite p-4 px-6 rounded-md shadow-lg  max-w-40 space-y-3 md:block hidden text-MediumGray font-medium">
						<li className="list-none">History</li>
						<li className="list-none">Our Team</li>
						<li className="list-none">Blog</li>
					</div>
				)}
			</div>
		</div>
	);
};

export default DropDown;
