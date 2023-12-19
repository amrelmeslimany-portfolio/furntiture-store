import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link, To } from "react-router-dom";
import ModalHeader from "../common/Modal/Header";

type Props = {
    type: "Email" | "Phone";
    to: To;
    isInit: boolean;
    description?: string;
    isClosable?: boolean;
};

const VerifyAlert = ({ to, type, isInit, description, isClosable = false }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isInit) return;
        let alertID = setTimeout(() => isInit && setIsOpen(true), 4000);
        return () => {
            clearTimeout(alertID);
        };
    }, [isInit]);

    if (!isInit) return;

    return (
        <Modal isOpen={isOpen} contentClassname="p-4 w-full xs:w-[380px]">
            <div className="bg-white p-4 rounded-lg text-center">
                {isClosable && <ModalHeader onClose={() => setIsOpen(false)} />}
                <div className="w-20 h-20 grid place-content-center mx-auto mb-2 bg-primary/5 text-primary text-4xl rounded-full ">
                    <FaExclamationTriangle />
                </div>
                <h5 className="text-xl capitalize font-semibold mb-1">Verify {type}</h5>
                <p className="text-secondaryText">
                    {description || `Please Verify Your ${type} To More Features`}
                </p>
                <Link
                    to={to}
                    className="base-btn bg-primary text-white w-40 inline-block rounded-full mt-3"
                    onClick={() => setIsOpen(false)}
                >
                    Verify Now
                </Link>
            </div>
        </Modal>
    );
};

export default VerifyAlert;
