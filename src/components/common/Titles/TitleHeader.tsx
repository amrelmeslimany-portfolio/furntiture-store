import { ReactNode } from "react";

type PropsType = {
    title: string;
    children: ReactNode;
    isH5?: boolean;
    isH6?: boolean;
    className?: string;
};
const TitleHeader = ({ title, className, children, isH5, isH6 }: PropsType) => {
    return (
        <div className={`flex justify-between items-center capitalize ${className || ""}`}>
            {isH6 && <h6 className="text-lg font-medium">{title}</h6>}
            {isH5 && <h4 className="text-xl font-medium leading-tight">{title}</h4>}
            {!isH5 && !isH6 && <h3 className="text-2xl font-medium">{title}</h3>}
            {children}
        </div>
    );
};

export const LineSmallHeader = ({ text, className }: { text: string } & Partial<PropsType>) => {
    return (
        <div className={`flex items-center space-x-2 mb-4 ${className}`}>
            <span className="w-4 rounded h-1 bg-primary block" />
            <p className="mb-0 text-md text-primary font-medium capitalize">{text}</p>
        </div>
    );
};

export default TitleHeader;
