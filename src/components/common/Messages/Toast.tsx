import toast, { ToastBar, Toaster } from "react-hot-toast";

function Toast() {
	return (
		<Toaster>
			{(t) => (
				<ToastBar toast={t}>
					{({ icon, message }) => (
						<div className="flex cursor-pointer" onClick={() => toast.dismiss(t.id)}>
							{icon}
							{message}
						</div>
					)}
				</ToastBar>
			)}
		</Toaster>
	);
}

export default Toast;
