import { BiPackage, BiRuler, BiSolidCabinet, BiSolidInstitution, BiTagAlt } from "react-icons/bi";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";
import Prices from "../../product/Prices";
import ImagesGellary from "./ImagesGellary";
import ProperityTag from "./ProperityTag";
import { FiClock, FiDollarSign, FiHeart, FiPercent } from "react-icons/fi";
import ShippingItem from "./ShippingItem";
import DetailsActions from "./DetailsActions";
import MoreLessButton from "../../common/Button/More";
import { useState } from "react";
import ProductRooms from "../../product/ProductRooms";
import { RoomsEnum } from "../../../constants/enums/furniture";
import { ProductCategriedInterface } from "../../../interfaces/products";
import { useAppSelector } from "../../../store";
import { EProductStatus } from "../../../constants/enums";

const Description: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti placeat esse labore fuga ducimus suscipit nisi
optio rem. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequuntur Deleniti Placeat Esse Labore Fuga Ducimus Suscipit Nisi Optio Rem.Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequuntur Deleniti Placeat Esse Labore Fuga Ducimus Suscipit Nisi Optio Rem.Lorem Ipsum`;

const SLICE_SIZE: number = 110;

const isLongDescription: boolean = Description.length > SLICE_SIZE;

type Props = {
    product: ProductCategriedInterface;
    isAdmin?: boolean;
};

const Details = ({ product, isAdmin }: Props) => {
    const { cart } = useAppSelector((state) => state.cart);
    const [isMoreDescription, setisMoreDescription] = useState(isLongDescription);
    return (
        <div className="flex gap-5 my-5 max-sm:flex-col">
            <ImagesGellary />
            <div className="flex-1">
                {isAdmin && (
                    <span className="block mb-2 w-fit p-1 text-sm bg-red-50 text-red-500">
                        {EProductStatus.Hidden}
                    </span>
                )}
                <h2 className="h2">Product Chair With 2xl Woozers</h2>
                {/* This will be link for reviews */}
                <div className="flex items-center gap-1 mt-1 mb-4">
                    <MultipleStarsRating value={4} starsClassName="text-sm" />
                    <p className="text-xs text-secondaryText">(89 Reviews)</p>
                </div>
                <Prices priceBefore={4567} priceAfter={4567 * 0.9} />
                <ul className="flex flex-wrap gap-2 items-center my-4">
                    <ProperityTag Icon={BiRuler} value="50x50" affix="cm" />
                    <ProperityTag Icon={BiPackage} value="50" affix="kg" />
                    <ProperityTag Icon={BiSolidCabinet} value="Chair" />
                    <ProperityTag Icon={BiTagAlt} value="Ikea" />
                    <ProperityTag Icon={BiSolidInstitution} value="Wood" />
                </ul>
                <ProductRooms className="mb-2 text-sm" rooms={[RoomsEnum.Bathroom]} />
                <article className="mb-4">
                    <h6 className="font-medium text-lg mb-2">Description:</h6>
                    <p className="text-secondaryText capitalize flex flex-wrap">
                        {isMoreDescription ? Description.slice(0, SLICE_SIZE) : Description}
                        {isLongDescription && (
                            <MoreLessButton
                                isMore={!isMoreDescription}
                                onToggleMore={() => setisMoreDescription((prev) => !prev)}
                            />
                        )}
                    </p>
                </article>

                <article>
                    <h6 className="font-medium text-lg mb-3">Shipping Information:</h6>
                    <div className="grid max-xs:grid-cols-1 xs:grid-cols-2 gap-4">
                        <ShippingItem
                            Icon={FiClock}
                            className="text-orange-500"
                            label="delivery time"
                            value="20h"
                        />
                        <ShippingItem
                            Icon={FiPercent}
                            className="text-blue-500"
                            label="discount"
                            value="-10%"
                        />
                        {!isAdmin && (
                            <>
                                {" "}
                                <ShippingItem
                                    Icon={FiHeart}
                                    className="text-red-500"
                                    label="Favourites"
                                    value="50 customers"
                                />
                                <ShippingItem
                                    Icon={FiDollarSign}
                                    className="text-green-500"
                                    label="Payment Method"
                                    value="Online"
                                />
                            </>
                        )}
                    </div>
                </article>
                {!isAdmin && (
                    <>
                        {" "}
                        <hr className="border-gray-100 my-4 max-sm:hidden" />
                        {/* FIXME handle this params */}
                        <DetailsActions
                            isInCart={Boolean(cart.find(({ id }) => id == product.id))}
                            product={product}
                            isShare={true}
                        />
                    </>
                )}
                {isAdmin && (
                    <p className="text-sm mt-4">
                        <span className="text-secondaryText">Added:</span> <b>20-02-2020 05:30am</b>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Details;
