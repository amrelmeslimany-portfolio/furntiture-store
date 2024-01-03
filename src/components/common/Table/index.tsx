import React from "react";
import { v4 } from "uuid";

type Props = {
    headers: (string | React.ReactNode)[];
    children: React.ReactNode;
    className?: string;
    headClassName?: string;
    tableClassName?: string;
};

export const Table = ({ headers, children, className, headClassName, tableClassName }: Props) => {
    return (
        <div className={`overflow-x-auto mt-5 ${className || ""}`}>
            <table className={`min-w-full ${tableClassName || ""}`}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={v4()}
                                className={`
									whitespace-nowrap  text-left text-xs leading-4 font-medium text-secondaryText uppercase tracking-wider 
									${headClassName ? headClassName : "bg-gray-50 p-4"}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};
