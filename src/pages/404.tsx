import Empty from "../components/common/Messages/Empty";
import { ERROR_IMG } from "../constants/images";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <Empty
            message="Not Found Page"
            src={ERROR_IMG}
            className="my-14"
            imgSize="w-14 h-14"
            extra={<Link to="/" children="Home" className="btn-text " />}
        />
    );
};

export default Error404;
