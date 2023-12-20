import InputIcon from "../common/Form/Input";
import Button from "../common/Button";
import { BiSolidOffer } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { getScreen } from "../../utils/functions";
import { SCREENS } from "../../constants/breackpoints";

const CuoponCode = () => {
    const isMobile = useMediaQuery(getScreen(SCREENS.sm));
    return (
        <div className="w-full">
            <span className="mb-2 block">Enter Coupon:</span>
            <div className="flex space-x-1.5 items-center mb-2">
                <InputIcon Icon={BiSolidOffer} isFull={!isMobile} placeholder="Enter Promocode" type="text" />
                <Button className="bg-primary">Sumbit</Button>
            </div>
        </div>
    );
};

export default CuoponCode;
