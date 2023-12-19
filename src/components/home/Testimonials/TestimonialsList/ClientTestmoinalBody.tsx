import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import MultipleStarsRating from "../../../common/Rating/MultipleStarsRating";
import { TestimonialClientType, TestimonialInterface } from "../../../../interfaces";

type PropsType = {
	testimonial: Pick<TestimonialClientType, "name" | "jobTitle"> & Omit<TestimonialInterface, "client">;
};

const ClientTestmoinalBody = ({ testimonial }: PropsType) => {
	const qoutesClasses: string = "text-gray-200 text-opacity-50 text-6xl absolute z-0 ";
	return (
		<section className="text-center">
			<h5 className="text-xl font-medium">{testimonial.name}</h5>
			<span className="text-secondaryText capitalize text-sm text-opacity-70">{testimonial.jobTitle}</span>
			<MultipleStarsRating value={testimonial.rating} className="my-2 justify-center" />
			<p className="text-secondaryText relative ">
				<BiSolidQuoteAltLeft className={`top-0 left-5 ${qoutesClasses}`} />
				<span className="relative z-10 text-justify">{testimonial.body}</span>
				<BiSolidQuoteAltRight className={`bottom-0  right-5 ${qoutesClasses}`} />
			</p>
		</section>
	);
};

export default ClientTestmoinalBody;
