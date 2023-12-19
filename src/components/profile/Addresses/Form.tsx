import { BiLogoCodepen, BiSolidCity, BiStreetView, BiTagAlt } from "react-icons/bi";
import InputIcon from "../../common/Form/Input";
import Button from "../../common/Button";
import { FiPlus } from "react-icons/fi";
import { Form, Formik, FormikHelpers } from "formik";
import { UserValidation } from "../../../utils/validations/user";
import ErrorText from "../../common/Form/ErrorText";
import { AddressDetailsInterface, AddressSettingsType } from "../../../interfaces/customer";

type Props = {
    initial?: AddressSettingsType | null;
    formType: "new" | "edit";
    onSubmit: (values: AddressDetailsInterface, formik: FormikHelpers<AddressDetailsInterface>) => void;
    className?: string;
};

const AddressesForm = ({ className, formType, initial, onSubmit }: Props) => {
    const initialValues: AddressDetailsInterface = {
        city: initial?.city || "",
        note: initial?.note || "",
        street: initial?.street || "",
        title: initial?.title || "",
        zipCode: initial?.zipCode || "",
    };

    return (
        <section className={className || ""}>
            <h5 className="text-xl font-semibold mb-4 capitalize">{formType} Address</h5>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={onSubmit}
                validationSchema={UserValidation.ADDRESS}
            >
                {(props) => (
                    <Form>
                        <div className="mb-3">
                            <InputIcon
                                Icon={BiTagAlt}
                                placeholder="Enter Address Title"
                                type="text"
                                name="title"
                                isError={Boolean(props.touched.title && props.errors.title)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.title}
                            />
                            <ErrorText name="title" />
                        </div>
                        <div className="flex max-xs:flex-col xs:space-x-3 mb-3">
                            <div className="flex-1">
                                <InputIcon
                                    Icon={BiSolidCity}
                                    placeholder="Enter City"
                                    type="text"
                                    name="city"
                                    isError={Boolean(props.touched.city && props.errors.city)}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.city}
                                />
                                <ErrorText name="city" />
                            </div>
                            <div className="xs:w-40 flex-shrink-0">
                                <InputIcon
                                    Icon={BiLogoCodepen}
                                    placeholder="Zip Code"
                                    isError={Boolean(props.touched.zipCode && props.errors.zipCode)}
                                    type="text"
                                    name="zipCode"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.zipCode}
                                />
                                <ErrorText name="zipCode" />
                            </div>
                        </div>
                        <div>
                            <InputIcon
                                Icon={BiStreetView}
                                isError={Boolean(props.touched.street && props.errors.street)}
                                placeholder="Enter Sreet"
                                type="text"
                                name="street"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.street}
                            />
                            <ErrorText name="street" />
                        </div>
                        <div className="my-3">
                            <textarea
                                placeholder="Enter Notes"
                                name="note"
                                className={`textarea ${
                                    Boolean(props.touched.note && props.errors.note) ? "border-red-500" : ""
                                }`}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.note}
                            />
                            <ErrorText name="note" />
                        </div>
                        <Button
                            type="submit"
                            className="flex items-center w-72 justify-center gap-3 bg-primary mx-auto "
                        >
                            <FiPlus />
                            <span className="capitalize">{formType} Address</span>
                        </Button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default AddressesForm;
