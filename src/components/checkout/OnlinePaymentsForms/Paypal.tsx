import InputIcon from "../../common/Form/Input";
import { BiEnvelope } from "react-icons/bi";
import { PaymentValidation } from "../../../utils/validations/payment";
import { Form, Formik } from "formik";
import ErrorText from "../../common/Form/ErrorText";
import CheckButton from "./CheckButton";

const validations = PaymentValidation.PAYPAL;

type Props = { onSubmit: (values: any) => void };

const PayPalForm = ({ onSubmit }: Props) => {
    const onSubmitHandle = (values: { email: string }) => onSubmit(values);
    return (
        <Formik initialValues={{ email: "" }} validationSchema={validations} onSubmit={onSubmitHandle}>
            {(props) => (
                <Form>
                    <InputIcon
                        Icon={BiEnvelope}
                        placeholder="Enter Paypal Email"
                        type="text"
                        name="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    <ErrorText name="email" />
                    <CheckButton />
                </Form>
            )}
        </Formik>
    );
};

export default PayPalForm;
