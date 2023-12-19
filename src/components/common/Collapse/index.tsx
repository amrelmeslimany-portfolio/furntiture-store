import { memo, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
	title: string;
	children: React.ReactNode;
	className?: string;
	defaultValue?: boolean;
};

const IconsClassnames = "text-secondaryText";

const Collapse = ({ children, title, className, defaultValue }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(defaultValue || false);
	return (
		<div className={className}>
			<div
				className="flex justify-between cursor-pointer border-b py-2 items-center"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h6 className="font-medium text-lg capitalize text-secondaryText">{title}</h6>
				<div>
					{isOpen ? (
						<FiMinus className={IconsClassnames} />
					) : (
						<FiPlus className={IconsClassnames} />
					)}
				</div>
			</div>
			{isOpen && <div className="mt-2">{children}</div>}
		</div>
	);
};

export default memo(Collapse);
