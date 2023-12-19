import { Link } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import { BreadcrumbType } from "../../../interfaces";

type Props = {
	items: BreadcrumbType[];
};

function Breadcrumb({ items }: Props) {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="flex items-center ">
				{items.map((item) => (
					<li key={uuid4()}>
						<BreadcrumbItem
							label={item.label}
							isCurrentPage={item.isCurrentPage}
							url={item.url}
						/>
					</li>
				))}
			</ol>
		</nav>
	);
}

function BreadcrumbItem({ label, isCurrentPage, url }: BreadcrumbType) {
	if (!isCurrentPage && url) {
		return (
			<>
				<Link to={url} className={"text-secondaryText hover:text-primary"}>
					{label}
				</Link>
				<span className="text-secondaryText mx-1">/</span>
			</>
		);
	}
	return <p className="text-secondary font-medium">{label}</p>;
}

export default Breadcrumb;
