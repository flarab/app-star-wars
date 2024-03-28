import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import preparePlanetData from '../utils/prepareData';
import { Character } from '../types';

type TransformFunction = (value: string | any) => string;

const useHistogramData = (
    dataKey: keyof Character,
    transformFn?: TransformFunction
) => {
    const { characters } = useSelector((state: RootState) => state.characters);

    const transformedCharacters = transformFn
        ? characters.map(character => ({
            ...character,
            [dataKey]: transformFn(character[dataKey]),
        }))
        : characters;

    return preparePlanetData(transformedCharacters, dataKey);
};

export default useHistogramData;