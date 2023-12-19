import Avatar from "../../common/Avatar";
import { CHAIR_IMG1, COVER_PROFILE_IMG } from "../../../constants/images";
import { v4 } from "uuid";
import { IconType } from "react-icons";
import { BiEnvelope, BiMaleSign, BiMap, BiPhone } from "react-icons/bi";

const USER_INFO: { icon: IconType; value: string }[] = [
    {
        icon: BiEnvelope,
        value: "amrmohamed@hotmail.com",
    },
    {
        icon: BiPhone,
        value: "+201093844532",
    },
    {
        icon: BiMaleSign,
        value: "Male",
    },
    {
        icon: BiMap,
        value: "Egypt",
    },
];

const UserInfo = () => {
    return (
        <>
            <div className="h-56 w-full rounded-xl overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-r from-primary  to-primary opacity-50 absolute inset-0" />
                <img
                    src={COVER_PROFILE_IMG}
                    loading="lazy"
                    alt="bg"
                    className="block h-full w-full object-cover object-center"
                />
            </div>
            <section className="-mt-20 text-center relative z-10">
                <Avatar src={CHAIR_IMG1} className="w-36 h-w-36 mx-auto bg-white" />
                <h5 className="text-xl font-semibold capitalize mt-3">Amr Mohamed Elmeslimany</h5>
            </section>
            <ul className="mt-3 mb-5 flex justify-between flex-wrap gap-3 max-md:flex-col">
                {USER_INFO.map((info) => (
                    <li key={v4()} className="flex gap-3 items-center p-2 ">
                        <info.icon className="text-xl text-secondaryText " />
                        <span>{info.value}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UserInfo;
