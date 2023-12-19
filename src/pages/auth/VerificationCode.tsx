import { useEffect, useState } from "react";
import Head from "../../components/common/Head";
import FormSide from "../../components/auth/FormSide";
import OTPForm from "../../components/common/Form/OTP";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { VerificationCodeTypesEnum } from "../../constants/enums";
import Empty from "../../components/common/Messages/Empty";
import { ERROR_IMG } from "../../constants/images";

const numberOfDigits: number = 6;

const VerificationCode = () => {
    const navigate = useNavigate();
    const [search] = useSearchParams();
    const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
    const { type } = useParams<{ type: VerificationCodeTypesEnum }>();

    const isTypeError = !type || !Object.values(VerificationCodeTypesEnum).includes(type);
    const email: string | null = search.get("email");

    useEffect(() => {
        console.log(email);
        if (otp.join("").trim().length === numberOfDigits) {
            console.log(email);
            console.log("Submit");
        }
    }, [otp, email]);

    return (
        <>
            <Head title="Verification Code" />
            {isTypeError ||
                (!email && (
                    <Empty
                        src={ERROR_IMG}
                        imgSize="w-20 h-20"
                        message="Somthing wrong happened"
                        extra={
                            <button className="mt-2 hover:underline" onClick={() => navigate(-1)}>
                                Back
                            </button>
                        }
                    />
                ))}
            {!isTypeError && email && (
                <FormSide
                    description="Check Your Email And Enter The Sent Code"
                    title="Verification Code"
                    isSocialAuth={false}
                    isBack={type === VerificationCodeTypesEnum.ForgotPassword}
                >
                    <OTPForm otp={otp} setOtp={setOtp} />
                    {/* Also this need the handling */}
                    <button className="btn-text">Resend Code?</button>
                </FormSide>
            )}
        </>
    );
};

export default VerificationCode;
