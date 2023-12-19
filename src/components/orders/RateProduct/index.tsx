import { useState } from "react";
import { RatingCategorysEnum } from "../../../constants/enums";
import Button from "../../common/Button";
import Alert from "../../common/Messages/Alert";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";
import { UserValidation } from "../../../utils/validations/user";
import { ValidationError } from "yup";
import RateValidationErrors from "./RateValidationErrors";

const RateProductForm = () => {
    const [ratesInput, setRatesInput] = useState({});
    const [reviewBody, setReviewBody] = useState<string>("");
    const [validateErrors, setValidateErrors] = useState<{}[] | null>(null);

    const isFoundError = (key: string): boolean =>
        Boolean(validateErrors?.find((item: any) => item.path == key));

    const onRateChange = (rate: number, category: string) => {
        setRatesInput((prev) => ({ ...prev, [category]: rate }));
    };

    const onSubmit = async () => {
        const data = {
            ...ratesInput,
            body: reviewBody,
        };
        try {
            await UserValidation.RATE.validate(data, { abortEarly: false });
            setValidateErrors(null);
            // save in db
            console.log(data);
        } catch (error) {
            setValidateErrors((error as ValidationError).inner.map(({ path, errors }) => ({ path, errors })));
        }
    };

    return (
        <div className="mt-5">
            <Alert text="you will rate only one time and you cant edit again be carful" />
            <ul className="grid grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
                {Object.entries(RatingCategorysEnum).map(([key, value]) => (
                    <li key={value}>
                        <p className={`text-gray-500 mb-1 ${isFoundError(key) ? "text-red-500" : ""}`}>
                            {value}
                        </p>
                        <MultipleStarsRating
                            value={0}
                            onRate={(rate) => onRateChange(rate, key.toString())}
                        />
                    </li>
                ))}
            </ul>
            <textarea
                placeholder="Enter Comment"
                onChange={(e) => setReviewBody(e.target.value)}
                value={reviewBody}
                className={`textarea mt-4 max-h-60 ${
                    isFoundError("body") ? "border-red-500 placeholder-red-500" : ""
                }`}
            />

            <RateValidationErrors errors={validateErrors} />

            <Button className="bg-primary mt-4 w-full xs:w-48 " onClick={onSubmit}>
                Rate
            </Button>
        </div>
    );
};

export default RateProductForm;
