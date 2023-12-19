type Props = {
	src: string;
	className?: string;
};
const Avatar = ({ src, className }: Props) => {
	return (
		<div
			className={`${
				className || "w-16 h-16"
			} overflow-hidden rounded-[50%] border border-white shadow`}
		>
			<img src={src} className="w-full h-full object-cover" alt="furniture" />
		</div>
	);
};

export default Avatar;
