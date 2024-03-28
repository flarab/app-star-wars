import {HistogramData} from "../types";

const prepareData = <T extends { name: string }>(
    items: T[],
    attribute: keyof T,
    isNumeric: boolean = false,
    transformFn?: (value: number) => number,
    revertTransformFn?: (value: number) => number,
    groupByRange: boolean = false,
    rangeFunction?: (value: number) => string
): HistogramData => {
    const counts: Record<string, number> = {};

    items.forEach(item => {
        let value = item[attribute];

        if (typeof value === 'string' && value !== 'unknown') {
            const numericValue = parseInt(value, 10);

            if (isNumeric && !isNaN(numericValue)) {
                let transformedValue = numericValue;

                if (transformFn) {
                    transformedValue = transformFn(numericValue);
                }

                if (groupByRange && rangeFunction) {
                    const rangeLabel = rangeFunction(transformedValue);
                    counts[rangeLabel] = (counts[rangeLabel] || 0) + 1;
                } else {
                    counts[item.name] = transformedValue;
                }
            } else if (!isNumeric) {
                counts[value] = (counts[value] || 0) + 1;
            }
        }
    });

    const labels = Object.keys(counts);
    const values = Object.values(counts).map(val =>
        revertTransformFn && isNumeric ? revertTransformFn(val) : val
    );

    return {labels, values};
};

export default prepareData;