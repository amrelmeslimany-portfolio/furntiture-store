import { FACEBOOK_IMG, GOOGLE_IMG } from "../../constants/images";

const SocialAuth = () => {
    return (
        <div className="flex space-x-2 justify-center">
            <button className="p-3 rounded-lg bg-white hover:bg-gray-50 ">
                <img src={GOOGLE_IMG} className="w-6 h-6" alt="google" />
            </button>
            <button className="p-3 rounded-lg bg-white hover:bg-gray-50 ">
                <img src={FACEBOOK_IMG} className="w-6 h-6" alt="facebook" />
            </button>
        </div>
    );
};

export default SocialAuth;
