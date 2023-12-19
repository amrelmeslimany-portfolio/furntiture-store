import { ReactNode } from "react";
import DividerText from "../common/Divider/DividerText";
import SocialAuth from "./SocialAuth";
import GlobalLogo from "../common/GlobalLogo";
import Button from "../common/Button";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

type Props = {
    title: string;
    description: string;
    children: ReactNode;
    isSocialAuth?: boolean;
    isBack?: boolean;
};

const FormSide = ({ description, children, title, isBack = false, isSocialAuth = true }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            {isBack && (
                <Button
                    className="mb-5 flex items-center space-x-2 group"
                    onClick={() => navigate(ROUTES.auth.sign_in)}
                >
                    <BiArrowBack className="text-secondary text-lg group-hover:text-white transition" />
                    <span className="text-secondary group-hover:text-white transition">Home</span>
                </Button>
            )}
            <GlobalLogo
                imgSize={55}
                isText={false}
                className="justify-center"
                textClassName="text-secondary"
            />
            <section className="text-center mt-6">
                <h5 className="text-2xl font-semibold capitalize">{title}</h5>
                <p className="text-secondaryText text-sm mt-1 mb-5">{description}</p>
                {children}
                {isSocialAuth && (
                    <>
                        <DividerText text="OR" />
                        <SocialAuth />
                    </>
                )}
            </section>
        </>
    );
};

export default FormSide;
