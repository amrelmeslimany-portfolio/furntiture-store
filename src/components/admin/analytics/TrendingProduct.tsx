import React from "react";
import Card from "../../common/Card";
import TitleHeader from "../../common/Titles/TitleHeader";
import { CHAIR_IMG1 } from "../../../constants/images";
import OneStarRate from "../../common/Rating";
import PercentStatus from "../../common/Category/PercentStatus";

const TrendingProduct = () => {
    return (
        <Card className="p-4 mt-4">
            <TitleHeader isH6 title="Trending Product" children={""} />
            <div className="flex gap-4 mt-4 mb-2 items-center">
                <div className="flex-1 flex gap-4 items-center flex-wrap">
                    <img
                        src={CHAIR_IMG1}
                        loading="lazy"
                        alt="product"
                        className="flex-shrink-0 w-16 h-16 rounded-xl"
                    />

                    <article>
                        <h6 className="text-lg truncate">Product Name</h6>
                        <OneStarRate rate={4} />
                        <PercentStatus percent={{ value: 1.2, isUp: true }} />
                    </article>
                </div>
                <p className="text-lg flex-shrink-0">
                    <span className="font-semibold">456</span>
                    <span className="text-secondaryText"> sales</span>
                </p>
            </div>
            <small className="text-xs text-secondaryText">Since Last Month</small>
        </Card>
    );
};

export default TrendingProduct;
