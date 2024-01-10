import IconCircleButton from "../../../common/Button/CircleIcon";
import { PiEye, PiPen, PiTrash } from "react-icons/pi";
import { ROUTES } from "../../../../constants/routes";
import { EActions } from "../../../../constants/enums";

const Actions = () => {
    return (
        <div className="flex gap-3">
            <IconCircleButton
                link={`${ROUTES.admin.products}/${EActions.Edit}`}
                icon={<PiPen className="group-hover:text-white transition text-primary" />}
                className="group w-9 h-9 "
            />
            <IconCircleButton
                icon={<PiEye className="group-hover:text-white transition text-gray-600" />}
                className="group w-9 h-9 "
            />
            <IconCircleButton
                icon={<PiTrash className="group-hover:text-white transition text-red-500" />}
                className="group w-9 h-9 "
            />
        </div>
    );
};

export default Actions;
