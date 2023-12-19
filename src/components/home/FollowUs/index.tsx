import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import FollowUsList from "./FollowUsList";

const FollowUs = () => {
	return (
		<div className="py-20">
			<Contianer>
				<article className="text-center mb-10">
					<LineSmallHeader text="follow us" className="justify-center" />
					<h2 className="h2 sm:max-w-md sm:mx-auto">
						Follow for updates & Exclusive offers!
					</h2>
				</article>
			</Contianer>
			<FollowUsList />
		</div>
	);
};

export default FollowUs;
