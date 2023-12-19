const Progress = ({ width }: { width: number }) => {
	return (
		<div className="relative bg-gray-100 h-1.5 rounded w-full ">
			<span className="absolute left-0 top-0 bg-primary h-full rounded" style={{ width: `${width}%` }} />
		</div>
	);
};

export default Progress;
