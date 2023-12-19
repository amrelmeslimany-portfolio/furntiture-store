import Divider from "../../components/common/Divider";
import Head from "../../components/common/Head";
import ChangePasswordForm from "../../components/profile/Password/Form";

const Password = () => {
	return (
		<>
			<Head title="Change Password" />
			<div className="flex gap-5 max-md9:flex-col">
				<ChangePasswordForm className="md9:flex-1" />
				<ul className="md9:w-[320px]">
					<li>
						<Divider text="Last Change" />
					</li>
					<li className="flex justify-between">
						<span>12 June,2001 05:05 am</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Password;
