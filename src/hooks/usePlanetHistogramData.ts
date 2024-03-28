import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import preparePlanetData from '../utils/prepareData';

const usePlanetHistogramData = () => {
    const { planets } = useSelector((state: RootState) => state.planets);

    const transformFn = (value: number) => Math.sqrt(value);
    const revertTransformFn = (value: number) => Math.pow(value, 1);

    const populationData = preparePlanetData(planets, 'population', true, transformFn,
        revertTransformFn);

    return {
        labels: populationData.labels,
        values: populationData.values,
        revertTransformFn
    };
};

export default usePlanetHistogramData;