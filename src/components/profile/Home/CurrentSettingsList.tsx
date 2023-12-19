import InfoCard from "../../common/Card/InfoCard";
import { BiCar, BiMapAlt, BiMoneyWithdraw } from "react-icons/bi";

const CurrentSettingsList = () => {
	return (
		<ul className="flex gap-3 my-10 flex-wrap">
			<li className="flex-auto">
				<InfoCard
					Icon={BiMapAlt}
					title="Home"
					smallTitle="Address"
					description="1234 Main St, City, State 90210"
				/>
			</li>
			<li className="flex-auto">
				<InfoCard
					Icon={BiMoneyWithdraw}
					title="Credit Card"
					smallTitle="Payment"
					description={"Numer: " + "4565".padStart(16, "*")}
				/>
			</li>
			<li className="flex-auto">
				<InfoCard
					Icon={BiCar}
					title="Normal Delivery"
					smallTitle="Delivery"
					description="The Type Of Delivery"
				/>
			</li>
		</ul>
	);
};

export default CurrentSettingsList;
