import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ArrowsEnum } from "../../../constants/enums";

const SwiperButton = ({ btnClassname, arrow }: { btnClassname: string; arrow: ArrowsEnum }) => {
	return (
		<button className={`${btnClassname} bg-primary p-2 rounded-full text-white w-fit transition`}>
			{arrow === ArrowsEnum.previous ? <FiArrowLeft className="text-xl" /> : <FiArrowRight className="text-xl" />}
		</button>
	);
};

export default SwiperButton;
