import React from "react";

type PropsType = {
	className?: string;
	children: React.ReactNode;
};

const Contianer = ({ className, children }: PropsType) => {
	return (
		<div className={`container px-4 max-sm:px-5 mx-auto ${className || ""}`}>
			{children}
		</div>
	);
};

export default Contianer;
