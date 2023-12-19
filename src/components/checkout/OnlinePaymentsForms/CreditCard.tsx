import InputIcon from "../../common/Form/Input";
import { BiCalendar, BiCreditCardAlt, BiCreditCardFront, BiUser } from "react-icons/bi";
import { Form, Formik } from "formik";
import { PaymentValidation } from "../../../utils/validations/payment";
import { InferType } from "yup";
import ErrorText from "../../common/Form/ErrorText";
import CheckButton from "./CheckButton";

import Alert from "../../common/Messages/Alert";

const valiedation = PaymentValidation.CREDIT_CARD;

type Props = { onSubmit: (values: any) => void };

const CreditCardForm = ({ onSubmit }: Props) => {
    const onSubmitHandle = (values: InferType<typeof valiedation>) => onSubmit(values);
    return (
        <div>
            <Alert text="This will increase the total price <b>+$10</b>" />
            <Formik
                initialValues={{ cardName: "", cardNumber: "", expiryDate: "", cvvCode: "" }}
                onSubmit={onSubmitHandle}
                validationSchema={valiedation}
            >
                {(props) => (
                    <Form>
                        <div>
                            <InputIcon
                                name="cardName"
                                Icon={BiUser}
                                placeholder="Name (Optional)"
                                type="text"
                                parentClassname="mb-2"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                isError={props.touched.cardName && Boolean(props.errors.cardName)}
                            />
                            <ErrorText name="cardName" />
                        </div>
                        <InputIcon
                            name="cardNumber"
                            Icon={BiCreditCardAlt}
                            placeholder="Number"
                            type="text"
                            parentClassname="mb-2"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            isError={props.touched.cardNumber && Boolean(props.errors.cardNumber)}
                        />
                        <ErrorText name="cardNumber" />
                        <div className="flex gap-2 max-xs:flex-col">
                            <div className="flex-1">
                                <InputIcon
                                    name="expiryDate"
                                    Icon={BiCalendar}
                                    placeholder="MM/YY"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    isError={props.touched.expiryDate && Boolean(props.errors.expiryDate)}
                                />
                                <ErrorText name="expiryDate" />
                            </div>
                            <div className="xs:w-48 flex-shrink-0">
                                <InputIcon
                                    name="cvvCode"
                                    Icon={BiCreditCardFront}
                                    placeholder="CVV"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    isError={props.touched.cvvCode && Boolean(props.errors.cvvCode)}
                                />
                                <ErrorText name="cvvCode" />
                            </div>
                        </div>
                        <CheckButton />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreditCardForm;
