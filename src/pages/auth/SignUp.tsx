import Head from "../../components/common/Head";
import FormSide from "../../components/auth/FormSide";
import InputIcon from "../../components/common/Form/Input";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";
import Button from "../../components/common/Button";
import { Form, Formik } from "formik";
import { UserValidation } from "../../utils/validations/user";
import ErrorText from "../../components/common/Form/ErrorText";
import { InferType } from "yup";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";
import GenderSelect from "../../components/common/Form/Select/GenderSelect";
import { GenderEnum } from "../../constants/enums";
import PhoneInput from "../../components/common/Form/PhoneInput";

type FormInitType = InferType<typeof UserValidation.SIGNUP>;

const initialValues: FormInitType = {
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: {
        code: "20",
        number: "",
    },
    password: "",
    repassword: "",
};

const SignUp = () => {
    return (
        <>
            <Head title="Sign Up" />
            <FormSide description="Create Account And Buy Furniture Online" title="Sign Up">
                <Formik
                    validationSchema={UserValidation.SIGNUP}
                    initialValues={initialValues}
                    onSubmit={(values, formik) => {
                        console.log({ ...values });
                        formik.resetForm();
                    }}
                >
                    {(props) => (
                        <Form>
                            <InputIcon
                                Icon={BiUser}
                                placeholder="Enter Your Firstname"
                                type="text"
                                parentClassname="mb-3"
                                isError={props.touched.firstName && Boolean(props.errors.firstName)}
                                {...props.getFieldProps("firstName")}
                            />
                            <ErrorText name="firstName" />
                            <InputIcon
                                Icon={BiUser}
                                placeholder="Enter Your Lastname"
                                type="text"
                                parentClassname="mb-3"
                                isError={props.touched.lastName && Boolean(props.errors.lastName)}
                                {...props.getFieldProps("lastName")}
                            />
                            <ErrorText name="lastName" />
                            <GenderSelect
                                selected={props.values.gender as GenderEnum}
                                onSelect={(gender: GenderEnum) => props.setFieldValue("gender", gender)}
                                isError={props.touched.gender && Boolean(props.errors.gender)}
                            />
                            <ErrorText name="gender" />
                            <InputIcon
                                Icon={BiEnvelope}
                                placeholder="Enter Your Email"
                                type="text"
                                parentClassname="mb-3"
                                isError={props.touched.email && Boolean(props.errors.email)}
                                {...props.getFieldProps("email")}
                            />
                            <ErrorText name="email" />
                            <PhoneInput
                                onChange={(value) => props.setFieldValue("phoneNumber", value)}
                                isError={
                                    props.touched.phoneNumber?.number &&
                                    Boolean(props.errors.phoneNumber?.number)
                                }
                            />
                            <ErrorText name="phoneNumber.number" />
                            <InputIcon
                                Icon={BiLock}
                                placeholder="*********"
                                type="password"
                                parentClassname="mb-3"
                                isError={props.touched.password && Boolean(props.errors.password)}
                                {...props.getFieldProps("password")}
                            />
                            <ErrorText name="password" />
                            <InputIcon
                                Icon={BiLock}
                                placeholder="*********"
                                type="password"
                                parentClassname="mb-3"
                                isError={props.touched.repassword && Boolean(props.errors.repassword)}
                                {...props.getFieldProps("repassword")}
                            />
                            <ErrorText name="repassword" />
                            <Button type="submit" className="bg-primary w-full">
                                Sign Up
                            </Button>
                            <Link
                                to={ROUTES.auth.sign_in}
                                className="bg-secondary rounded-full text-white mt-3 block p-2  w-full"
                            >
                                Sign In
                            </Link>
                        </Form>
                    )}
                </Formik>
            </FormSide>
        </>
    );
};

export default SignUp;
