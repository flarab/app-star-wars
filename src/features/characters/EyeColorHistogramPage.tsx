import React from 'react';
import {View} from 'react-native';
import Histogram from "../../components/Histogram";
import useHistogramData from "../../hooks/useHistogramData";

const EyeHistogramPage: React.FC = () => {
    const eyeColorData = useHistogramData('eye_color');

    return (
        <View>
            <Histogram labels={eyeColorData.labels} values={eyeColorData.values}/>
        </View>
    );
};

export default EyeHistogramPage;
