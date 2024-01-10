import * as yup from "yup";
import {
    FurnitureBrands,
    FurnitureMaterials,
    ProductCategriesEnum,
    RoomsEnum,
} from "../../constants/enums/furniture";

export class ProductValidation {
    static PRODUCT = yup.object().shape({
        name: yup.string().required("Product name is required"),
        description: yup.string().required("Product description is required"),
        price: yup.string().required("Product price is required").matches(/\d$/, "Must Be Number"), // Adjust if price is a number
        inStock: yup.string().required("In-stock status is required").matches(/\d$/, "Must Be Number"), // Adjust if inStock is a boolean
        images: yup
            .array(yup.mixed())
            .test("required", "Product Images required", (value) => value!.length > 0)
            .required("Product images are required"),
        rooms: yup
            .array(yup.mixed().oneOf(Object.values(RoomsEnum)))
            .test("required", "Rooms are required", (value) => value!.length > 0)
            .required("Rooms are required"),
        category: yup
            .string()
            .oneOf(Object.values(ProductCategriesEnum))
            .required("Product category is required"),
        dimensions: yup.object().shape({
            width: yup.string().required("Product width is required").matches(/\d$/, "Must Be Number"),
            height: yup.string().required("Product height is required").matches(/\d$/, "Must Be Number"),
        }),
        weight: yup.string().required("Product weight is required").matches(/\d$/, "Must Be Number"),
        brand: yup.string().oneOf(Object.values(FurnitureBrands)).required("Product brand is required"),
        material: yup
            .string()
            .oneOf(Object.values(FurnitureMaterials))
            .required("Product material is required"),
    });
}
