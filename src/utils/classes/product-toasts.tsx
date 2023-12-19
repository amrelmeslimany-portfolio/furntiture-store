import toast from "react-hot-toast";
import { ToastParamsType } from "../../interfaces";
import ImageToast from "../../components/common/Messages/ImageToast";
import { padStartZero } from "../functions";

interface ToastsInterface {
    quantity(msg: string): void;
    added(msg?: string): void;
    quantityError(): void;
}

export class ProductToasts implements ToastsInterface {
    private _image: string;

    constructor(image: string) {
        this._image = image;
    }

    // Quantity

    quantity(msg: string) {
        toastImg({ src: this._image, text: `Quantity (${msg})` });
    }

    added(msg?: string): void {
        toastImg({ src: this._image, text: msg || "Added To Cart" });
    }

    quantityError() {
        toastImg({ src: this._image, text: "Remove from cart", isError: true });
    }

    static removed(number: number): void {
        toast.success(`${padStartZero(number)} Item Removed`);
    }
}

export const toastImg = ({ src, text, isError }: ToastParamsType) => {
    if (isError) return toast.error(<ImageToast src={src} text={text} />);
    toast.success(<ImageToast src={src} text={text} />);
};
