import { ErrorMessage } from "formik";

const ErrorText = ({ name }: { name: string }) => {
    return <ErrorMessage name={name} className="text-red-500 my-2.5 ms-1.5 text-start" component={"div"} />;
};

export default ErrorText;
