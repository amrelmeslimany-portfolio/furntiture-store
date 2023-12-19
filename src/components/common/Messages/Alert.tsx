import HTMLReactParser from "html-react-parser";
import { FiAlertCircle } from "react-icons/fi";

const Alert = ({ text }: { text: string }) => {
    return (
        <div className="bg-orange-50 text-orange-500 p-3 rounded-xl my-3 capitalize flex  gap-3">
            <FiAlertCircle className="flex-shrink-0 mt-1.5" />
            <p className="block">{HTMLReactParser(text)}</p>
        </div>
    );
};

export default Alert;
