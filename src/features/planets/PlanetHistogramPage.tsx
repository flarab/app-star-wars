import React from 'react';
import {View} from 'react-native';
import Histogram from "../../components/Histogram";
import usePlanetHistogramData from "../../hooks/usePlanetHistogramData";

const PlanetHistogramPage: React.FC = () => {

    const { labels, values, revertTransformFn } = usePlanetHistogramData();

    return (
        <View>
            <Histogram labels={labels} values={values}
                       revertTransformFn={revertTransformFn}/>
        </View>
    );
};

export default PlanetHistogramPage;
