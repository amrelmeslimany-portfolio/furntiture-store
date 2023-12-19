import { isEmpty } from "lodash";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef } from "react";

type Props = {
    setOtp: Dispatch<SetStateAction<string[]>>;
    otp: string[];
};

const OTPForm = ({ otp, setOtp }: Props) => {
    const otpBoxReference = useRef<HTMLInputElement[]>([]);

    const onChange = (value: string, index: number): void => {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && index < otp.length - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    };

    const onBackspaceAndEnter = (e: KeyboardEvent<HTMLInputElement>, index: number): void => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        }
        if (e.key === "Enter" && e.currentTarget.value && index < otp.length - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    };

    const onClear = () => {
        setOtp(new Array(otp.length).fill(""));
        otpBoxReference.current[0].focus();
    };

    useEffect(() => {
        otpBoxReference.current[0].focus();
    }, []);

    return (
        <div>
            {!isEmpty(otp.join("")) && (
                <button className="text-primary font-medium text-sm hover:underline" onClick={onClear}>
                    Clear
                </button>
            )}
            <div className="flex items-center justify-center flex-wrap gap-2 xs:gap-3 my-3">
                {otp.map((digit, index) => (
                    <input
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        key={index}
                        value={digit}
                        min={0}
                        max={9}
                        maxLength={1}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onChange(e.target.value.trim(), index)
                        }
                        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => onBackspaceAndEnter(e, index)}
                        ref={(reference) => (otpBoxReference.current[index] = reference as HTMLInputElement)}
                        className={`w-9 h-9 xs:p-2 rounded-md block text-center  bg-white border focus:border-primary focus:outline-none appearance-none`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OTPForm;
