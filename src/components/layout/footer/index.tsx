import { BiSolidEnvelope } from "react-icons/bi";
import { WAVYLINES_SVG } from "../../../constants/images";
import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import InputIcon from "../../common/Form/Input";

const Newsletter = () => {
	return (
		<div
			className="py-20 bg-gray-100 text-center bg-cover bg-top bg-no-repeat"
			style={{ backgroundImage: `url(${WAVYLINES_SVG})` }}
		>
			<Contianer>
				<section className=" max-w-lg mx-auto">
					<LineSmallHeader text="Our Newsletter" className="justify-center" />
					<h2 className="h2">
						Subscribe to our newsletter to get updates to our letters furniture
					</h2>
					<p className="text-secondaryText capitalize text-sm my-4 font-medium">
						Get 20% off on your first order just by subscribing to our
						newsletter
					</p>
					<div className="flex gap-2 mt-10">
						<InputIcon
							Icon={BiSolidEnvelope}
							type="email"
							isFull
							placeholder="Enter Email Address"
						/>
						<button className="btn-primary bg-primary flex-shrink-0">
							Subscribe
						</button>
					</div>
				</section>
			</Contianer>
		</div>
	);
};

export default Newsletter;
