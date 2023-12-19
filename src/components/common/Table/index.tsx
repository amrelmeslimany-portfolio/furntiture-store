import React from "react";
import { v4 } from "uuid";

type Props = {
	headers: (string | React.ReactNode)[];
	children: React.ReactNode;
	className?: string;
};

export const Table = ({ headers, children, className }: Props) => {
	return (
		<div className={`overflow-x-auto mt-5 ${className || ""}`}>
			<table className="min-w-full">
				<thead>
					<tr>
						{headers.map((header) => (
							<th
								key={v4()}
								className="p-4 whitespace-nowrap bg-gray-50  text-left text-xs leading-4 font-medium text-secondaryText uppercase tracking-wider"
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
