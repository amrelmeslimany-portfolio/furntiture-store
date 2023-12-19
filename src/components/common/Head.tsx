import { Helmet } from "react-helmet-async";

type Props = {
	title: string;
};

const Head = ({ title }: Props) => {
	return (
		<Helmet>
			<title> {title} | Furniture</title>
			<meta
				name="description"
				content="Furniture eccommerce website for selling furnitures."
			/>
		</Helmet>
	);
};

export default Head;
