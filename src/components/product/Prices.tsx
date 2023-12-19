const Prices = ({
    priceAfter,
    priceBefore,
    className,
}: {
    priceAfter: number;
    priceBefore?: number;
    className?: string;
}) => {
    return (
        <p className="my-1">
            <span className={`font-medium inline-block mr-2 ${className || "text-2xl"}`}>
                ${priceAfter.toFixed(2)}
            </span>
            {priceBefore && (
                <small className="text-secondaryText line-through text-base">${priceBefore.toFixed(2)}</small>
            )}
        </p>
    );
};

export default Prices;
