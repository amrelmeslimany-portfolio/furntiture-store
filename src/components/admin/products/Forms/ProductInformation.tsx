import React from "react";
import Card from "../../../common/Card";
import InputIcon from "../../../common/Form/Input";
import ErrorText from "../../../common/Form/ErrorText";
import SelectFilter from "../../../common/Form/Select/SelectFilter";
import {
    FurnitureBrands,
    FurnitureMaterials,
    ProductCategriesEnum,
    RoomsEnum,
} from "../../../../constants/enums/furniture";
import { useFormikContext } from "formik";
import { IAdminProduct } from "../../../../interfaces/admin";

const ProductInformation = () => {
    const formik = useFormikContext<IAdminProduct>();
    return (
        <div>
            <Card padding="p-4" className="mb-4" title="Information">
                <div className="mb-3">
                    <InputIcon
                        placeholder="Enter Product Name"
                        type="text"
                        name="name"
                        isError={Boolean(formik.touched.name && formik.errors.name)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    <ErrorText name="name" />
                </div>
                <div className="mb-3">
                    <textarea
                        rows={6}
                        placeholder="Enter Product description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className={`
                        textarea resize-none 
                        ${
                            formik.touched.description && Boolean(formik.errors.description)
                                ? "border-red-500"
                                : ""
                        }`}
                    />
                    <ErrorText name="description" />
                </div>
            </Card>
            <Card padding="p-4" title="Categories">
                <div className="mb-3">
                    <SelectFilter
                        isError={formik.touched.category && Boolean(formik.errors.category)}
                        name="category"
                        placeholder="Select Category"
                        onChange={(value) => formik.setFieldValue("category", value?.value)}
                        options={Object.values(ProductCategriesEnum).map((cat) => ({
                            value: cat,
                            label: cat,
                        }))}
                    />
                    <ErrorText name="category" />
                </div>
                <div className="mb-3">
                    <SelectFilter
                        isError={formik.touched.rooms && Boolean(formik.errors.rooms)}
                        name="rooms"
                        placeholder="Select Rooms"
                        onChange={(rooms) =>
                            formik.setFieldValue(
                                "rooms",
                                rooms.map((item) => item.value)
                            )
                        }
                        isMulti={true}
                        options={Object.values(RoomsEnum).map((cat) => ({
                            value: cat,
                            label: cat,
                        }))}
                    />
                    <ErrorText name="rooms" />
                </div>
                <div className="mb-3">
                    <SelectFilter
                        isError={formik.touched.brand && Boolean(formik.errors.brand)}
                        name="brand"
                        placeholder="Select Brand"
                        onChange={(value) => formik.setFieldValue("brand", value?.value)}
                        options={Object.values(FurnitureBrands).map((cat) => ({
                            value: cat,
                            label: cat,
                        }))}
                    />
                    <ErrorText name="brand" />
                </div>
                <div className="mb-3">
                    <SelectFilter
                        isError={formik.touched.material && Boolean(formik.errors.material)}
                        name="material"
                        placeholder="Select Material"
                        onChange={(value) => formik.setFieldValue("material", value?.value)}
                        options={Object.values(FurnitureMaterials).map((cat) => ({
                            value: cat,
                            label: cat,
                        }))}
                    />
                    <ErrorText name="material" />
                </div>
            </Card>
        </div>
    );
};

export default ProductInformation;
