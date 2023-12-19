import { useState, useEffect } from "react";
import { useSearchParams as useRouterSearchParams } from "react-router-dom";
import { analysisList } from "../utils/functions";

// BUG the working version

const useParamsFilter = <T>(paramName: string, isArray: boolean = true) => {
    const [searchParams, setSearchParams] = useRouterSearchParams();
    const searchValue: any = searchParams.get(paramName) || null;
    const initialValue = searchValue && isArray ? analysisList(searchValue.split(",")) : searchValue;
    const [paramValue, setParamValue] = useState<T>(initialValue ? initialValue : isArray ? [] : null);
    const isEmptyList: boolean = paramValue ? isArray && (paramValue as []).length == 0 : true;
    useEffect(() => {
        setSearchParams(
            (prevSearchParams) => {
                // Clone the previous searchParams to avoid modifying it directly
                const newSearchParams = new URLSearchParams(prevSearchParams.toString());
                // Update URL query when parameter value changes
                if ((!paramValue || isEmptyList) && newSearchParams.has(paramName)) {
                    newSearchParams.delete(paramName);
                } else if (!isEmptyList) {
                    newSearchParams.set(
                        paramName,
                        isArray ? (paramValue! as []).join(",") : (paramValue as string)
                    );
                }
                return newSearchParams;
            },
            { replace: true }
        );
    }, [paramValue, paramName, isArray]);

    return [paramValue, setParamValue, setSearchParams, searchParams.has(paramName)] as const;
};

export default useParamsFilter;
