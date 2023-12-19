import htmlParser from "html-react-parser";
import { v4 } from "uuid";
const Specification = ({ specifications }: { specifications: { label: string; value: string }[] }) => {
	return (
		<div className="py-5 mt-10 border-t  border-gray-100">
			<h3 className="text-2xl capitalize font-medium">specifications</h3>
			<ul className="grid md:grid-cols-2  gap-2 mt-5 bg-gray-50 rounded p-2">
				{specifications.map((item) => (
					<li className="flex max-xs:flex-col" key={v4()}>
						<span className="w-40 block   text-secondaryText  px-4 xs:py-2 flex-shrink-0">{item.label}</span>
						<p className="capitalize px-4 xs:py-2 ">{htmlParser(item.value)}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Specification;
