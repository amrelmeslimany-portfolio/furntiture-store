import { BiEnvelope, BiUser } from "react-icons/bi";
import InputIcon from "../../common/Form/Input";
import UploadImage from "../../common/Form/Upload/UploadImage";
import PhoneInput from "../../common/Form/PhoneInput";
import { useState } from "react";
import Modal from "../../common/Modal";
import ModalHeader from "../../common/Modal/Header";
import OTPForm from "../../common/Form/OTP";

const PersonalInfoForm = () => {
    const [isVerifyOpen, setisVerifyOpen] = useState<boolean>(false);
    const [otp, setOTP] = useState<string[]>(Array(6).fill(""));

    return (
        <>
            <div className="mx-auto">
                <UploadImage />
                <div className="flex max-md:flex-col gap-3 mb-3 mt-3">
                    <InputIcon
                        Icon={BiUser}
                        placeholder="Enter Firstname"
                        type="text"
                        parentClassname="flex-1"
                    />
                    <InputIcon
                        Icon={BiUser}
                        placeholder="Enter Lastname"
                        type="text"
                        parentClassname="flex-1"
                    />
                </div>
                <InputIcon Icon={BiEnvelope} parentClassname="mb-3" placeholder="Enter Email" type="email" />
                {/* OnVerify when user not verify the number */}
                <PhoneInput onChange={console.log} onVerify={() => setisVerifyOpen(true)} />
            </div>

            <Modal isOpen={isVerifyOpen} contentClassname="w-[500px] max-sm:w-full p-5">
                <div className="rounded-xl p-3 bg-white    text-center">
                    <ModalHeader onClose={() => setisVerifyOpen(false)} title="Verify Phone" />
                    <p className="text-sm text-secondaryText mb-4">
                        Please Check Your Email Address For Code
                    </p>
                    <OTPForm otp={otp} setOtp={setOTP} />
                    <button className="btn-text">Resend Code?</button>
                </div>
            </Modal>
        </>
    );
};

export default PersonalInfoForm;
