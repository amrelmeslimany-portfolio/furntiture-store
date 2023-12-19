import * as yup from "yup";

export class PaymentValidation {
    static CREDIT_CARD = yup.object({
        cardNumber: yup
            .string()
            .required("Card number is required")
            .matches(/^\d{16}$/, "Invalid card number (16 number)"),
        expiryDate: yup
            .string()
            .required("Expiry date is required")
            .matches(/^\d{2}\/\d{2}$/, "Invalid expiry date (MM/YY)"),
        cvvCode: yup
            .string()
            .required("CVV code is required")
            .matches(/^\d{3}$/, "Invalid CVV code (3 number)"),
        cardName: yup
            .string()
            .matches(/^[A-Za-z ]*$/, "Please enter valid name")
            .max(40), // Card name is optional
    });

    static PAYPAL: yup.ObjectSchema<{ email: string }> = yup.object({
        email: yup.string().required("Email is required").email("Must be email"),
    });
}

export type OnlinePayFormType =
    | yup.InferType<typeof PaymentValidation.CREDIT_CARD>
    | yup.InferType<typeof PaymentValidation.PAYPAL>;
