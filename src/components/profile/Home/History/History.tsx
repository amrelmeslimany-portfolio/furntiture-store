import Divider from "../../../common/Divider";
import { ActionsEnum, CustomerRequestsEnum } from "../../../../constants/enums";
import { v4 } from "uuid";
import { CustomerHistoryType } from "../../../../interfaces/customer";
import HistoryItem from "./HistoryItem";

const RequestsHistory: CustomerHistoryType[] = [
	{
		type: ActionsEnum.Add,
		date: "01 June, 10:00AM",
		request: CustomerRequestsEnum.Cart,
		product: "Chair Of Diviings 4Legs",
	},
	{
		type: ActionsEnum.Delete,
		date: "01 June, 10:00AM",
		request: CustomerRequestsEnum.Favourite,
		product: "Chair Of Diviings 4Legs",
	},
	{
		type: ActionsEnum.Update,
		date: "01 June, 10:00AM",
		request: CustomerRequestsEnum.Order,
		product: "Chair Of Diviings 4Legs",
	},
];

const History = () => {
	return (
		<div>
			<Divider text="History" />
			<ul className="mt-3">
				{RequestsHistory.map((request) => (
					<HistoryItem
						date={request.date}
						product={request.product}
						request={request.request}
						type={request.type}
						key={v4()}
					/>
				))}
			</ul>
		</div>
	);
};

export default History;
