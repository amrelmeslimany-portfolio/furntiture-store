import React from "react";

type PropsType = {
	children: React.ReactNode;
	img: string;
	height: string;
	bgClassname?: string;
	rounded?: string;
};
const ImgOverlay = ({
	children,
	img,
	bgClassname,
	height,
	rounded,
}: PropsType) => {
	const overlayClassname =
		bgClassname || "from-black opacity-70  to-transparent";
	return (
		<div
			className={`relative bg-cover bg-center  overflow-hidden ${height} ${
				rounded || "rounded-xl"
			}`}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div
				className={`absolute inset-0 ${overlayClassname} bg-gradient-to-t z-0`}
			/>
			{children}
		</div>
	);
};

export default ImgOverlay;
