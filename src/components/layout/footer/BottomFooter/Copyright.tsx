const Copyright = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="pt-5 text-center md:text-left text-sm flex items-center flex-col justify-center gap-2 md:flex-row  md:justify-between text-white text-opacity-80 capitalize">
			<p>
				Copyright &copy; {currentYear}{" "}
				<b className="text-primary">Amr Elmeslimany</b>. All Rights Reserved
			</p>
			<p>User Terms & Conditions | Privacy Policy</p>
		</div>
	);
};

export default Copyright;
