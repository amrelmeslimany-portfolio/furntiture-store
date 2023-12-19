import { CASHONDELIVERY_IMG } from "../../../constants/images";
import Button from "../../common/Button";

type Props = {
    onNext: () => void;
};

const CashOnDelivery = ({ onNext }: Props) => {
    return (
        <div className="text-center">
            <img src={CASHONDELIVERY_IMG} className="w-44 h-4w-44 mx-auto" alt="cash on delivery" />
            <p className="capitalize text-secondary my-2 text-sm text-center">
                You will pay your money when you receive orders
            </p>
            <Button className="mt-2 bg-primary w-52 font-semibold" onClick={onNext}>
                Next
            </Button>
        </div>
    );
};

export default CashOnDelivery;
