import {
	TestimonialClientType,
	TestimonialInterface,
} from "../../../../interfaces";

type PropsType = {
	onClick: (id: string) => void;
	isSelected: boolean;
	testimonial: Pick<TestimonialInterface, "id"> & {
		client: Pick<TestimonialClientType, "image" | "name">;
	};
};

const ClientTestmonial = ({ isSelected, onClick, testimonial }: PropsType) => {
	return (
		<button
			onClick={() => onClick(testimonial.id)}
			className={`${
				isSelected ? "shadow-lg border-4 border-white h-24 w-24" : "h-16 w-16"
			} rounded-[50%] overflow-hidden block transition transform `}
		>
			<img
				src={testimonial.client.image}
				className="h-full w-full object-cover object-center"
				alt={testimonial.client.name + " testimonial"}
			/>
		</button>
	);
};

export default ClientTestmonial;
