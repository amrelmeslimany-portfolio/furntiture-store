import Head from "../../components/common/Head";
import FormSide from "../../components/auth/FormSide";
import { Form, Formik } from "formik";
import { UserValidation } from "../../utils/validations/user";
import InputIcon from "../../components/common/Form/Input";
import { BiEnvelope } from "react-icons/bi";
import ErrorText from "../../components/common/Form/ErrorText";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { VerificationCodeTypesEnum } from "../../constants/enums";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const onSubmit = (values: { email: string }) => {
        /**
         *  if email found in db redirect to verfication code page
         *  This live for text
         */
        navigate({
            pathname: `${ROUTES.auth.verificationcode}/${VerificationCodeTypesEnum.ForgotPassword}`,
            search: `?email=${values.email}`,
        });
    };

    return (
        <>
            <Head title="Forgot Password" />
            <FormSide
                description="Please Enter Your Email You Want Reset"
                title="Forgot Password"
                isSocialAuth={false}
                isBack
            >
                <Formik
                    initialValues={{ email: "" }}
                    onSubmit={onSubmit}
                    validationSchema={UserValidation.EMAIL}
                >
                    {(props) => (
                        <Form>
                            <InputIcon
                                Icon={BiEnvelope}
                                placeholder="Enter Your Email"
                                parentClassname="mb-3"
                                type="text"
                                isError={props.touched.email && Boolean(props.errors.email)}
                                {...props.getFieldProps("email")}
                            />
                            <ErrorText name="email" />
                            <Button type="submit" className="bg-primary w-full">
                                Check Email
                            </Button>
                        </Form>
                    )}
                </Formik>
            </FormSide>
        </>
    );
};

export default ForgotPassword;
