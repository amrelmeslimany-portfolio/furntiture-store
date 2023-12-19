import { useCallback, useEffect, useRef, useState } from "react";
import { DelivryOptionsEnum, SettingsEnum } from "../../../constants/enums";

import PersonalInfoForm from "./PersonalInfoForm";
import PaymentSettings from "./Payment";
import DeliveryOptions from "../../checkout/DeliveryOptions";
import Button from "../../common/Button";
import { FiSave } from "react-icons/fi";

const SettingsHome = () => {
	const [setting, setSetting] = useState<SettingsEnum>(SettingsEnum.PersonalInfo);
	const [delivery, setDelivery] = useState<DelivryOptionsEnum>(DelivryOptionsEnum.Normal);
	const refs = useRef<(HTMLElement | null)[]>([]);

	const refCallback = useCallback((element: any) => {
		if (element) {
			refs.current.push(element);
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setSetting(entry.target.getAttribute("id") as SettingsEnum);
					}
				});
			},
			{ threshold: 0.5 }
		);

		refs.current.forEach((item) => observer.observe(item!));

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="flex max-xl:flex-col-reverse gap-5">
			<div className="flex-auto">
				<section ref={refCallback} id={SettingsEnum.PersonalInfo}>
					<h5 className="text-xl font-semibold mb-4">{SettingsEnum.PersonalInfo}</h5>
					<PersonalInfoForm />
				</section>
				<hr className="my-5 border-gray-100" />
				<section ref={refCallback} id={SettingsEnum.Payment}>
					<h5 className="text-xl font-semibold mb-4">{SettingsEnum.Payment}</h5>
					<PaymentSettings />
				</section>
				<hr className="my-5 border-gray-100" />
				<section ref={refCallback} id={SettingsEnum.DeliveryType}>
					<h5 className="text-xl font-semibold mb-4">{SettingsEnum.DeliveryType}</h5>
					<DeliveryOptions
						currentOption={delivery}
						onDeliveryChange={(option) => setDelivery(option)}
					/>
				</section>
				<hr className="my-5 border-gray-100" />
				<Button className="flex items-center w-72 justify-center gap-3 bg-primary mx-auto sticky bottom-16 md:bottom-4">
					<FiSave />
					<span>Save Settings</span>
				</Button>
			</div>
			<div className=" xl:w-72 max-xl:flex max-xl:flex-row border  bg-white shadow-sm border-gray-100 pt-3 px-2 h-fit sticky top-4">
				{Object.values(SettingsEnum).map((item) => (
					<span
						key={item}
						className={`
						px-4 pb-4 block  w-full text-start transition ${
							item == setting ? "text-primary underline font-semibold" : "text-secondary"
						}`}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default SettingsHome;
