import { ButtonHTMLAttributes, ReactNode } from "react";

type PropsType = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...props }: PropsType) => {
    return (
        <button className={`btn rounded-full ${className || ""}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
