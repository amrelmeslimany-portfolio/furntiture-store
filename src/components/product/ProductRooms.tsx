import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { RoomsEnum } from "../../constants/enums/furniture";

type Props = {
	rooms: RoomsEnum[];
	className?: string;
};

const ProductRooms = ({ rooms, className }: Props) => {
	return (
		<div
			className={`mt-3 flex flex-wrap gap-1.5 items-center pt-2 border-t border-gray-50 ${
				className || ""
			}`}
		>
			<span className="text-secondaryText">Rooms:</span>
			{rooms.map((room) => (
				<Link
					key={room}
					className=" hover:bg-blue-50 transition hover:underline px-1.5 py-1 text-blue-900 rounded-full"
					to={{
						pathname: ROUTES.main.Shop,
						search: `?rooms=${room}`,
					}}
				>
					{room}
				</Link>
			))}
		</div>
	);
};

export default ProductRooms;
