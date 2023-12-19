import { BiSearch } from "react-icons/bi";
import InputIcon from "../../../common/Form/Input";
import Modal from "../../../common/Modal";
import SearchList from "./SearchList";
import Contianer from "../../../common/Container";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { ProductCategriedInterface } from "../../../../interfaces/products";
import { addToSearch } from "../../../../store/products/product-slice";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModalContent = ({ isOpen, setIsOpen }: Props) => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.products);
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<ProductCategriedInterface[]>([]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value);

    const onVisit = (value: string) => {
        // Save to history
        dispatch(addToSearch(value));
        setIsOpen(false);
        setInput("");
        setResult([]);
    };

    useEffect(() => {
        if (input.trim().length == 0) setResult([]);
        else {
            const regex = new RegExp(input.trim(), "ig");
            setResult(products.filter(({ name }) => regex.test(name)));
        }
    }, [input]);

    return (
        <Modal isOpen={isOpen} contentClassname="w-full top-64" onOverlayClick={() => setIsOpen(false)}>
            <Contianer>
                <InputIcon
                    isFull
                    Icon={BiSearch}
                    placeholder="Search Product"
                    type="search"
                    value={input}
                    onChange={onChange}
                />
                <SearchList
                    onHistoryClick={(value) => setInput(value)}
                    onVisit={onVisit}
                    input={input}
                    result={result}
                />
            </Contianer>
        </Modal>
    );
};

export default SearchModalContent;
