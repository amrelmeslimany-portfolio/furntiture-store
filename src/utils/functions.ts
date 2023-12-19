import { padStart } from "lodash";
import { MinMaxType } from "../interfaces";

export const getScreen = (screen: string): { query: string } => ({
    query: `(min-width: ${screen})`,
});

export const getMagnifiedTranslation = (
    event: React.TouchEvent | React.MouseEvent,
    targetRef: React.RefObject<HTMLDivElement>
): string => {
    if (targetRef.current) {
        const { clientX, clientY } =
            event.type === "touchstart" || event.type === "touchmove"
                ? (event as React.TouchEvent).touches[0]
                : (event as React.MouseEvent);
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = targetRef.current;
        let clientXAdjusted = clientX - offsetLeft;
        let clientYAdjusted = clientY - offsetTop;
        clientXAdjusted = (clientXAdjusted / offsetWidth) * 100;
        clientYAdjusted = (clientYAdjusted / offsetHeight) * 100;
        return `translate(-${clientXAdjusted}%,-${clientYAdjusted}%) scale(1.5)`;
    }
    return "";
};

export function toggleSelection<T>(value: T, selected: T[]): T[] {
    if (selected.includes(value)) {
        return selected?.filter((item) => item !== value);
    } else {
        return [...selected, value];
    }
}

export function isNumeric(value: string): boolean {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue);
}

export function analysisList(list: [] | null) {
    if (list) {
        if (list.every((value) => isNumeric(value))) return list.map(Number) as [];
        else return list;
    }
}

export function handleMinMax(value: number, minMax?: Partial<MinMaxType>): number {
    const min = minMax?.min || 10;
    const max = minMax?.max || 10000;
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

export const padStartZero = (value: number) => {
    if (value == 0) return value;
    else return padStart(value.toString(), 2, "0");
};
