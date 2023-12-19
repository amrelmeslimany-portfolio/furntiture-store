import VerifyAlert from "../auth/VerifyAlert";
import { ROUTES } from "../../constants/routes";
import { VerificationCodeTypesEnum } from "../../constants/enums";

const InitAlerts = () => {
    // NOTE when not email verified , dont open phone verify
    const isEmailVarified = true;
    const isPhoneVerified = false;
    return (
        <>
            <VerifyAlert
                isInit={!isEmailVarified}
                type="Email"
                to={{
                    pathname: `${ROUTES.auth.verificationcode}/${VerificationCodeTypesEnum.EmailVerification}`,
                    search: `?email=456879@gmail.com`,
                }}
            />
            <VerifyAlert
                isClosable
                isInit={isEmailVarified && !isPhoneVerified}
                type="Phone"
                to={{ pathname: ROUTES.user.settings, hash: "#verifyphoneBtn" }}
            />
        </>
    );
};

export default InitAlerts;
