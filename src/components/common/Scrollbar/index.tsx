import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

type Props = {
    children: React.ReactNode;
    className: string;
};

const ScrollbarWrap = ({ children, className }: Props) => {
    return <SimpleBar className={className}>{children}</SimpleBar>;
};

export default ScrollbarWrap;
