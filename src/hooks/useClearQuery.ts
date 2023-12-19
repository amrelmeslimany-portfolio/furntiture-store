import { useEffect } from "react";

const useClearQuery = (isInQuery: boolean, setSearchParams: any, setSelected: any) => {
	useEffect(() => {
		if (!isInQuery) setSelected([]);
	}, [setSearchParams]);
};

export default useClearQuery;
