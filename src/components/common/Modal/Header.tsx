import IconCircleButton from "../Button/CircleIcon";
import { BiXCircle } from "react-icons/bi";

type Props = { title?: string; onClose: () => void };

const ModalHeader = ({ title, onClose }: Props) => {
    return (
        <section
            className={`
			flex 
			${title ? "border-b border-gray-100 mb-3 pb-2 items-center justify-between" : ""}`}
        >
            {title && <h5 className="font-semibold text-xl">{title}</h5>}
            <IconCircleButton
                onClick={onClose}
                icon={<BiXCircle className="text-primary group-hover:text-white" />}
                className="group w-9 h-9 ms-auto"
            />
        </section>
    );
};

export default ModalHeader;
