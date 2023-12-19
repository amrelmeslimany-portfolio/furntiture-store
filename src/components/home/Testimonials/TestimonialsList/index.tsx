import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid4 } from "uuid";
import ClientTestmonial from "./ClientTestmonial";
import { MAIN_TESTIMONIALS } from "../../../../constants";
import { useEffect, useState } from "react";
import ClientTestmoinalBody from "./ClientTestmoinalBody";
import { TestimonialInterface } from "../../../../interfaces";

const TestimonialsList = () => {
	const [selected, setSelected] = useState<string>(MAIN_TESTIMONIALS[0].id);
	const [testimonial, setTestimonial] = useState<TestimonialInterface>(MAIN_TESTIMONIALS[0]);

	useEffect(() => {
		const foundTestimonial = MAIN_TESTIMONIALS.find((item) => item.id === selected);
		if (foundTestimonial && selected != testimonial.id) setTestimonial(foundTestimonial);
	}, [selected, testimonial.id]);

	return (
		<div>
			<Swiper spaceBetween={10} slidesPerView={"auto"} className="py-4 px-2" wrapperClass="items-center">
				{MAIN_TESTIMONIALS.map((testimonail) => {
					const client = {
						image: testimonail.client.image,
						name: testimonail.client.name,
					};
					return (
						<SwiperSlide key={uuid4()} className="w-fit h-fit">
							<ClientTestmonial
								key={testimonail.id}
								testimonial={{ client, id: testimonail.id }}
								isSelected={selected == testimonail.id}
								onClick={(id) => setSelected(id)}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<ClientTestmoinalBody
				testimonial={{
					body: testimonial.body,
					id: testimonial.id,
					jobTitle: testimonial.client.jobTitle,
					name: testimonial.client.name,
					rating: testimonial.rating,
				}}
			/>
		</div>
	);
};

export default TestimonialsList;
