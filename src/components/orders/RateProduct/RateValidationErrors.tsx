import { BsFillInfoCircleFill } from "react-icons/bs";
import { v4 } from "uuid";

const RateValidationErrors = ({ errors }: { errors: any }) => {
    if (!errors) return;
    return (
        <ul className="segment p-2 bg-red-400 mt-3">
            {errors.map((item: Record<string, string | undefined>) => (
                <li key={v4()} className="text-white capitalize p-1">
                    <BsFillInfoCircleFill className="text-xs inline-block  me-2 -mt-0.5 " />
                    {item.errors?.toString()}
                </li>
            ))}
        </ul>
    );
};

export default RateValidationErrors;
