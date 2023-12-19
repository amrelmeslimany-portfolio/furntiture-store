type PropsType = {
	title: string;
	text: string;
};
const TitleWithText = ({ text, title }: PropsType) => {
	return (
		<article className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
			<h2 className="h2 sm:col-span-1">{title}</h2>
			<div className="md:max-w-lg sm:col-span-1 lg:col-span-2 lg:ml-auto self-end">
				<p className="mb-0 text-secondaryText md:pl-2 md:border-l-4 border-primary">
					{text}
				</p>
			</div>
		</article>
	);
};

export default TitleWithText;
