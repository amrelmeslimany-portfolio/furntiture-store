import Head from "../../components/common/Head";
import FormSide from "../../components/auth/FormSide";
import InputIcon from "../../components/common/Form/Input";
import { BiEnvelope, BiLock } from "react-icons/bi";
import Checkbox from "../../components/common/Form/Checkbox";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Button from "../../components/common/Button";
import { Form, Formik } from "formik";
import { UserValidation } from "../../utils/validations/user";
import ErrorText from "../../components/common/Form/ErrorText";
import { useState } from "react";

const SignIn = () => {
    const [isStayLogged, setIsStayLogged] = useState<boolean>(false);
    return (
        <>
            <Head title="Sign In" />
            <FormSide description="Welcome back. Please Enter Your Details" title="Sign In">
                <Formik
                    validationSchema={UserValidation.SIGNIN}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => console.log({ ...values, isStayLogged })}
                >
                    {(props) => (
                        <Form>
                            <InputIcon
                                Icon={BiEnvelope}
                                placeholder="Enter Your Email"
                                type="text"
                                parentClassname="mb-3"
                                isError={props.touched.email && Boolean(props.errors.email)}
                                {...props.getFieldProps("email")}
                            />
                            <ErrorText name="email" />
                            <InputIcon
                                Icon={BiLock}
                                placeholder="*********"
                                type="password"
                                parentClassname="mb-3"
                                isError={props.touched.password && Boolean(props.errors.password)}
                                {...props.getFieldProps("password")}
                            />
                            <ErrorText name="password" />
                            <div className="flex justify-between gap-2 my-4 px-1">
                                <Checkbox
                                    checked={isStayLogged}
                                    onChange={() => setIsStayLogged((prev) => !prev)}
                                    value="stayLogin"
                                    label="Remember Login"
                                    className="text-start text-sm flex-shrink-0 "
                                />
                                <Link
                                    to={ROUTES.auth.forgotpassword}
                                    className="text-primary text-sm font-medium hover:underline"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                            <Button type="submit" className="bg-primary w-full">
                                Sign In
                            </Button>
                            <Link
                                to={ROUTES.auth.sign_up}
                                className="bg-secondary rounded-full text-white mt-3 block p-2  w-full"
                            >
                                Sign Up
                            </Link>
                        </Form>
                    )}
                </Formik>
            </FormSide>
        </>
    );
};

export default SignIn;
