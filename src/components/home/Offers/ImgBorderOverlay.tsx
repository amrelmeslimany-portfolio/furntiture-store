const ImgBorderOverlay = ({
	img,
	className,
}: {
	img: string;
	className?: string;
}) => {
	return (
		<div
			className={`h-full rounded-lg overflow-hidden shrink-0 relative ${
				className || ""
			}`}
		>
			<img
				src={img}
				className="h-full w-full object-cover "
				alt="office offer"
			/>
			<span className="absolute border-2  border-white inset-2 rounded-lg " />
		</div>
	);
};

export default ImgBorderOverlay;
