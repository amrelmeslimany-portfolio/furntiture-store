import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import TestimonialsList from "./TestimonialsList";

const Testimonails = () => {
	return (
		<div className="py-20 bg-gray-100">
			<Contianer className="grid grid-cols-1 sm:grid-cols-[35%,45%] gap-4 justify-between items-center">
				<section>
					<LineSmallHeader text="Testimonials" />
					<h2 className="h2">Our customors Testimonials</h2>
					<p className="text-secondaryText my-6">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
						ipsam neque deleniti, ratione vero itaque .
					</p>
					<button className=" btn-primary bg-primary ">Explore Products</button>
				</section>
				<TestimonialsList />
			</Contianer>
		</div>
	);
};

export default Testimonails;
