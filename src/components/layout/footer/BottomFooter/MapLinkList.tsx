import { FooterLinksType } from "../../../../interfaces/links";
import { v4 as uuid4 } from "uuid";

type PropsType = {
	item: FooterLinksType;
	className?: string;
};

const MapLinkList = ({ item, className }: PropsType) => {
	return (
		<section className={className}>
			<h6 className="font-medium text-lg text-white mb-4 capitalize">
				{item.title}
			</h6>
			<ul className="flex flex-col space-y-2">
				{item.links.map(({ link, name }) => (
					<li key={uuid4()}>
						<a
							href={link}
							className="text-white text-opacity-60 hover:text-primary capitalize"
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default MapLinkList;
