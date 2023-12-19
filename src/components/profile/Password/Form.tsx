import { FiSave } from "react-icons/fi";
import Button from "../../common/Button";
import InputIcon from "../../common/Form/Input";
import { BiLock } from "react-icons/bi";

type Props = { className?: string };

const ChangePasswordForm = ({ className }: Props) => {
	return (
		<section className={className || ""}>
			<h5 className="text-xl font-semibold mb-4">Change Password</h5>
			<form>
				<InputIcon
					Icon={BiLock}
					placeholder="Enter Old Password"
					type="password"
					parentClassname="mb-3"
				/>
				<InputIcon
					Icon={BiLock}
					placeholder="Enter New Password"
					type="password"
					parentClassname="mb-3"
				/>
				<InputIcon
					Icon={BiLock}
					placeholder="Enter Confirm Password"
					type="password"
					parentClassname="mb-3"
				/>

				<Button className="flex items-center w-72 justify-center gap-3 bg-primary mx-auto ">
					<FiSave />
					<span>Change Password</span>
				</Button>
			</form>
		</section>
	);
};

export default ChangePasswordForm;
