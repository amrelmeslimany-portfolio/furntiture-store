import SimpleBar from "simplebar-react";
import Card from "../../../common/Card";
import { useFormikContext } from "formik";
import { IAdminProduct } from "../../../../interfaces/admin";
import ErrorText from "../../../common/Form/ErrorText";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "simplebar-react/dist/simplebar.min.css";
import "./ProductGallery.css";

registerPlugin(FilePondPluginImagePreview);

const ProductGallery = () => {
    const formik = useFormikContext<IAdminProduct>();

    return (
        <Card
            padding="p-4"
            className={`${formik.touched.images && Boolean(formik.errors.images) ? "iserror" : ""} mb-4`}
            title="Gallery"
        >
            <SimpleBar className="max-h-52">
                <FilePond
                    acceptedFileTypes={["image/*"]}
                    files={formik.values.images}
                    allowMultiple={true}
                    instantUpload={false}
                    credits={false}
                    imagePreviewHeight={150}
                    imagePreviewMarkupShow={false}
                    name="images" /* sets the file input name, it's filepond by default */
                    labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
                    onupdatefiles={(files) =>
                        formik.setFieldValue(
                            "images",
                            files.map((img) => img.file)
                        )
                    }
                />
            </SimpleBar>
            <ErrorText name="images" />
        </Card>
    );
};

export default ProductGallery;
