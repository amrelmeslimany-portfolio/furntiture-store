import React from "react";
import { v4 } from "uuid";
import IconCircleButton from "../Button/CircleIcon";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<div className="flex justify-center space-x-2 mt-5">
			<IconCircleButton
				icon={<BiChevronLeft className="text-3xl text-secondary hover:text-white" />}
				className="w-10 h-10 bg-primary bg-opacity-10 "
			/>
			{pageNumbers.slice(0, 2).map((pageNumber) => (
				<button
					key={v4()}
					className={`bg-primary rounded-[50%]  w-10 h-10 text-lg ${
						currentPage == pageNumber ? "bg-opacity-100 text-white" : "bg-opacity-10 hover:bg-opacity-100 hover:text-white"
					}`}
					onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
			<IconCircleButton
				icon={<BiChevronRight className="text-3xl text-secondary hover:text-white" />}
				className="w-10 h-10 bg-primary bg-opacity-10"
			/>
		</div>
	);
};

export default Pagination;
