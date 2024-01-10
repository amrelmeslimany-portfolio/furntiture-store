import React from "react";
import { useParams } from "react-router-dom";
import { EActions } from "../../../constants/enums";
import Empty from "../../../components/common/Messages/Empty";
import { ERROR_IMG } from "../../../constants/images";
import Head from "../../../components/common/Head";
import TitleHeader from "../../../components/common/Titles/TitleHeader";
import { Form, Formik } from "formik";
import Button from "../../../components/common/Button";
import { FiPlus, FiSave } from "react-icons/fi";
import ProductInformation from "../../../components/admin/products/Forms/ProductInformation";
import { IAdminProduct } from "../../../interfaces/admin";
import ProductStatesMeasures from "../../../components/admin/products/Forms/ProductStatesMeasures";
import { ProductValidation } from "../../../utils/validations/product";

const ProductForm = () => {
    const { action } = useParams();
    // FIXME you will need the edited data
    const initialValues: IAdminProduct = {
        name: "",
        description: "",
        price: "",
        inStock: "",
        images: [],
        rooms: [],
        category: "",
        dimensions: {
            width: "",
            height: "",
        },
        weight: "",
        brand: "",
        material: "",
    };

    if (action && Object.values(EActions).includes(action as EActions)) {
        return (
            <>
                <Head title={`${action} Product`} />
                <section>
                    <TitleHeader title={`${action} product`} className="mb-8" children />
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize
                        onSubmit={(values) => console.log(values)}
                        validationSchema={ProductValidation.PRODUCT}
                    >
                        {(props) => (
                            <Form>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <ProductInformation />
                                    <ProductStatesMeasures />
                                </div>
                                <Button
                                    type="submit"
                                    className="flex items-center w-72 justify-center gap-3 bg-primary mx-auto "
                                >
                                    {action == EActions.New ? <FiPlus /> : <FiSave />}
                                    <span className="capitalize">{action} Product</span>
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </section>
            </>
        );
    }

    return <Empty message="Not Found This Page" src={ERROR_IMG} imgSize="w-16 h-16" />;
};

export default ProductForm;
