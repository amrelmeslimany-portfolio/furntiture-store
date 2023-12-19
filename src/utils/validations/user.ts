import * as yup from "yup";
import { AddressDetailsInterface, ReviewType } from "../../interfaces/customer";
import { RatingCategorysEnum } from "../../constants/enums";

export class UserValidation {
    static ADDRESS: yup.ObjectSchema<AddressDetailsInterface> = yup.object({
        title: yup.string().required("Title is required").max(20),
        city: yup.string().required("City is required"),
        zipCode: yup
            .string()
            .required("Zip Code is required")
            .matches(/^\d{5}$/, "Invalid Zip code (5 number)"),
        street: yup.string().required("Street is required"),
        note: yup.string().required("Note is required"),
    });

    static RATE: yup.ObjectSchema<ReviewType> = yup.object({
        Comfort: yup.number().required(`${RatingCategorysEnum.Comfort} required`).min(1).max(5),
        CustomerService: yup
            .number()
            .required(`${RatingCategorysEnum.CustomerService} required`)
            .min(1)
            .max(5),
        Delivery: yup.number().required(`${RatingCategorysEnum.Delivery} required`).min(1).max(5),
        Design: yup.number().required(`${RatingCategorysEnum.Design} required`).min(1).max(5),
        SizeAndFit: yup.number().required(`${RatingCategorysEnum.SizeAndFit} required`).min(1).max(5),
        body: yup.string().required("Body is required").trim(),
        date: yup.string(),
    });

    static EMAIL = yup.object({ email: yup.string().required("Email is required").email("Should be email") });

    static SIGNIN = this.EMAIL.shape({
        password: yup.string().required("Password is required").min(6),
    });

    static SIGNUP = this.SIGNIN.shape({
        firstName: yup.string().required("Firstname is required"),
        lastName: yup.string().required("Lastname is required"),
        gender: yup.string().required().oneOf(["male", "female"]),
        phoneNumber: yup.object({
            code: yup.string(),
            number: yup
                .string()
                .matches(/^\d{10,15}$/, "Invalid phone number")
                .required("Phone number is required"),
        }),
        repassword: yup
            .string()
            .required("Re-Password is required")
            .oneOf([yup.ref("password")], "Passwords must match"),
    });
}
