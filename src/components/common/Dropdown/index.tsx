import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";

interface DropdownProps {
	button: ReactNode;
	options: ReactNode;
	buttonClassName?: string;
	wrapClassName?: string;
}

const Dropdown = ({ options, button, buttonClassName, wrapClassName }: DropdownProps) => {
	return (
		<Menu as="div" className="relative">
			<Menu.Button className={buttonClassName}>{button}</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className={`w-44 shadow p-1 rounded absolute z-20 bg-white   ${wrapClassName || ""}`}>{options}</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Dropdown;
