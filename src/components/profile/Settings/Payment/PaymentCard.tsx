import { BiCheckCircle, BiCircle } from "react-icons/bi";
import { OnlinePaymentMethodsEnum } from "../../../../constants/enums";
import { PAYPAL_IMG, VISA_IMG } from "../../../../constants/images";
import IconCircleButton from "../../../common/Button/CircleIcon";
import { FiTrash2 } from "react-icons/fi";

type Props = {
	type: OnlinePaymentMethodsEnum;
	title: string;
	selected: boolean;
	onSelect: () => void;
};

const PaymentCard = ({ type, title, selected, onSelect }: Props) => {
	const isCredit: boolean = type == OnlinePaymentMethodsEnum.CreditCard;
	return (
		<li
			className={`
		text-center rounded-xl shadow-sm p-3 flex-1 min-w-[250px] cursor-pointer  border md9:max-w-[50%] 
		${selected ? "border-primary" : "border-gray-100 hover:bg-gray-50"}`}
			onClick={onSelect}
		>
			{selected ? <BiCheckCircle className="text-primary" /> : <BiCircle />}
			<img src={isCredit ? VISA_IMG : PAYPAL_IMG} alt="paypal" className="w-16 h-14 mx-auto" />
			<p className="text-xl text-center mb-3 mt-2 font-semibold break-words">
				{isCredit ? title.padStart(16, "*") : title}
			</p>
			<IconCircleButton
				icon={<FiTrash2 className="text-red-500 group-hover:text-white" />}
				className="group w-9 h-9 hover:bg-red-500 mx-auto"
				iconSize="lg"
			/>
		</li>
	);
};

export default PaymentCard;
