import React from "react";
import Card from "../../../common/Card";
import InputIcon from "../../../common/Form/Input";
import ErrorText from "../../../common/Form/ErrorText";
import { IAdminProduct } from "../../../../interfaces/admin";
import { useFormikContext } from "formik";
import ProductGallery from "./ProductGallery";

const ProductStatesMeasures = () => {
    const formik = useFormikContext<IAdminProduct>();
    return (
        <div>
            <ProductGallery />
            <Card padding="p-4" className="mb-4" title="Measurements">
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product Weight"
                        type="text"
                        name="weight"
                        min={0}
                        apprex="kg"
                        isError={Boolean(formik.touched.weight && formik.errors.weight)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.weight}
                    />
                    <ErrorText name="weight" />
                </div>
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product Width"
                        type="text"
                        apprex="cm"
                        min={0}
                        name="dimensions.width"
                        isError={Boolean(formik.touched.dimensions?.width && formik.errors.dimensions?.width)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dimensions.width}
                    />
                    <ErrorText name="dimensions.width" />
                </div>
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product height"
                        type="text"
                        name="dimensions.height"
                        apprex="cm"
                        min={0}
                        isError={Boolean(
                            formik.touched.dimensions?.height && formik.errors.dimensions?.height
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dimensions.height}
                    />
                    <ErrorText name="dimensions.height" />
                </div>
            </Card>
            <Card padding="p-4" title="Price & Stock">
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product In Stock"
                        type="text"
                        name="inStock"
                        min={0}
                        isError={Boolean(formik.touched.inStock && formik.errors.inStock)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.inStock}
                    />
                    <ErrorText name="inStock" />
                </div>
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product Price"
                        type="text"
                        name="price"
                        min={0}
                        apprex="$"
                        isError={Boolean(formik.touched.price && formik.errors.price)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    <ErrorText name="price" />
                </div>
            </Card>
        </div>
    );
};

export default ProductStatesMeasures;
