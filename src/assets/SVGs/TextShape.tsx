type PropsType = {
	width: number | string;
	height: number | string;
	bgColorOuter: string;
	bgColor: string;
	className: string;
	text: string;
};
export const ShapeText = ({
	width,
	height,
	bgColorOuter,
	bgColor,
	text,
	className,
}: PropsType) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			viewBox="0 0 407 125"
		>
			<path
				fill={bgColorOuter}
				d="M0,68.8C12.8,68.9,63.5,8.2,63.5,8.2C70.1,3,79.4,0,89.1,0h229.6c10.6,0,20.5,3.5,27.1,9.5
      c0,0,44.5,59.4,61.1,59.4c0.6,0-47.3,56.3-47.3,56.3H61L0,68.8z"
			/>
			<path fill={bgColorOuter} d="M346.2,68.9H56" />
			<path
				fill={bgColor}
				d="M326.2,101.8H78c-9.9,0-18.7-4.7-24.4-12c-6.3-8.1-5.5-19.7,1.4-27.3L84.5,30c5.6-6.2,13.5-9.7,21.9-9.7
      h196.3c9,0,17.6,4.1,23.2,11.2L350.6,63c5.6,7.1,6.3,17.1,1.4,24.7C346.6,96.2,337,101.8,326.2,101.8z"
			/>
			<text x="26%" y="58%" fill="white" fontSize="34px">
				{text}
			</text>
		</svg>
	);
};
