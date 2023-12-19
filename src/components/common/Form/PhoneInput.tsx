import { ChangeEvent, useEffect, useState } from "react";
import CountriesKey from "../Dropdown/CountriesKey";
import InputIcon from "./Input";
import { BiPhone } from "react-icons/bi";
import { CodePhoneType, CountryType } from "../../../interfaces";

type Props = {
    isError?: boolean | undefined;
    onVerify?: (() => void) | null;
    onChange: (value: CodePhoneType) => void;
};

const initialKey = { code: "20", name: "EG" };

const PhoneInput = ({ isError, onChange, onVerify }: Props) => {
    const [keyCountry, setKeyCountry] = useState<CountryType>(initialKey);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [flashVerify, setFlashVerify] = useState<boolean>(false);

    const onInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(value);
    };

    useEffect(() => {
        if (onVerify) setFlashVerify(true);
        let flashTimerID = setTimeout(() => {
            setFlashVerify(false);
        }, 10000);
        return () => {
            clearInterval(flashTimerID);
        };
    }, []);

    useEffect(() => {
        let handleValue = phoneNumber.trim();
        onChange({
            code: keyCountry.code,
            number: handleValue.startsWith("0") ? handleValue.slice(1) : handleValue, // Remove "0" of the begining
        });
    }, [keyCountry, phoneNumber]);

    return (
        <div className="mb-3 flex gap-3 max-md:flex-col">
            <div className="flex space-x-2 flex-1">
                <CountriesKey onChange={(value) => setKeyCountry(value)} />
                <InputIcon
                    Icon={BiPhone}
                    placeholder="Enter Phone Number"
                    type="text"
                    parentClassname="flex-1"
                    value={phoneNumber}
                    isError={isError}
                    onChange={onInput}
                    onBlur={onInput}
                />
            </div>
            {onVerify && (
                <button
                    id="verifyphoneBtn"
                    className={`text-primary base-btn rounded-full bg-primary/5 flex-shrink-0 md:w-28 ${
                        flashVerify ? "animate-bubble" : ""
                    }`}
                    onClick={onVerify}
                >
                    Verify
                </button>
            )}
        </div>
    );
};

export default PhoneInput;
