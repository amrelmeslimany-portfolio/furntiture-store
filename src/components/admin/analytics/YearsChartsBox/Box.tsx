import React, { ReactNode, useState } from "react";
import Card from "../../../common/Card";
import TitleHeader from "../../../common/Titles/TitleHeader";
import Dropdown from "../../../common/Dropdown";
import { Menu } from "@headlessui/react";

const years: string[] = ["2020", "2021"];

type Props = { chart: ReactNode; title: string; className?: string };

const Box: React.FC<Props> = ({ chart, title, className }) => {
    const [selected, setSelected] = useState<string>("2021");

    const options = years.map((year) => (
        <Menu.Item
            as="div"
            key={year}
            className={`
            block cursor-pointer w-full p-1.5 text-start hover:bg-primary/5 hover:text-primary transition
            ${year === selected ? "bg-primary/10 text-primary" : ""}`}
            onClick={() => setSelected(year)}
        >
            {year}
        </Menu.Item>
    ));

    return (
        <Card className={`p-4 ${className || ""}`}>
            <TitleHeader isH6 title={title}>
                <Dropdown
                    wrapClassName="right-1/2 transform translate-x-1/2 max-w-[80px]"
                    buttonClassName="base-btn bg-primary/5 text-primary rounded-full"
                    button={selected}
                    options={options}
                />
            </TitleHeader>
            {chart}
        </Card>
    );
};

export default Box;
