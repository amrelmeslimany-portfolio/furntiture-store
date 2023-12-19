import { useEffect, useState } from "react";
import Dropdown from ".";
import { Menu } from "@headlessui/react";
import { v4 } from "uuid";
import { FiChevronDown } from "react-icons/fi";
import { CountryType } from "../../../interfaces";

type Props = {
    onChange: (value: CountryType) => void;
};

const CountriesKey = ({ onChange }: Props) => {
    const [keys, setKeys] = useState<{ [key: string]: CountryType }[]>([]);
    const [keyCountry, setKeyCountry] = useState<CountryType>({ code: "20", name: "EG" });

    const onSelect = (value: CountryType) => {
        setKeyCountry(value);
        onChange(value);
    };

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await fetch("/src/assets/json/countries-numberkeys.json");
                const json = await response.json();
                setKeys(JSON.parse(json));
            } catch (error) {
                console.log("COUNTRIES ERRRO:", error);
            }
        };

        getCountries();
    }, []);

    const options = keys.map((country) => {
        return Object.entries(country).map(([key, value]) => {
            return (
                <Menu.Item
                    className={`flex justify-between gap-2 p-1.5 rounded-lg mb-0.5
                    cursor-pointer hover:bg-primary hover:text-white transition
                    ${value.code == keyCountry.code ? "bg-primary text-white rounded-lg" : ""}`}
                    as={"div"}
                    key={v4()}
                    onClick={() => onSelect({ code: value.code, name: key })}
                >
                    <span className="flex-shrink-0">{key}</span>
                    <span className="flex-shrink-0">+{value.code}</span>
                </Menu.Item>
            );
        });
    });

    return (
        <Dropdown
            wrapClassName="max-h-[150px] overflow-auto w-12"
            options={options}
            buttonClassName="bg-white p-3  border rounded-full"
            button={
                <div className="flex space-x-2  items-center ">
                    <span>
                        {keyCountry.name} +{keyCountry.code}
                    </span>
                    <FiChevronDown />
                </div>
            }
        />
    );
};

export default CountriesKey;
