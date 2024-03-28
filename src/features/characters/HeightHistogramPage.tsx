import React from 'react';
import { View } from 'react-native';
import Histogram from "../../components/Histogram";
import useHistogramData from "../../hooks/useHistogramData";

const HeightHistogramPage: React.FC = () => {
    const groupHeightIntoRange = (height: number): string => {
        if (height < 100) return '< 100 cm';
        if (height < 150) return '100 - 149 cm';
        if (height < 200) return '150 - 199 cm';
        return '200+ cm';
    };
    const heightData = useHistogramData('height', groupHeightIntoRange);


    return (
        <View>
            <Histogram labels={heightData.labels} values={heightData.values} />
        </View>
    );
};

export default HeightHistogramPage;
