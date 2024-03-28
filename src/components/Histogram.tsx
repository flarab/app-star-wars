import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Histogram = ({ labels, values, revertTransformFn }:any) => {
    const data = {
        labels,
        datasets: [{ data: values }],
    };

    return (
        <View>
            <BarChart
                data={data}
                width={Dimensions.get('window').width - 20}
                height={Dimensions.get('window').height - 200}
                yAxisLabel=""
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: { borderRadius: 16 },
                    propsForLabels: { fontSize: labels.length > 5 ? 10 : 12 },
                    propsForVerticalLabels: {
                        rotation: labels.length > 5 ? -90 : 0,
                    },
                    formatYLabel: revertTransformFn ? (yValue) => {
                        const value = Math.pow(parseFloat(yValue), 2);
                        if (value >= 1e9) {
                            return (value / 1e9).toFixed(1) + 'G';
                        }
                        if (value >= 1e6) {
                            return (value / 1e6).toFixed(1) + 'M';
                        }
                        if (value >= 1e3) {
                            return (value / 1e3).toFixed(1) + 'K';
                        }
                        return Math.round(value).toString();
                    } : undefined,
                }}
                style={{ borderRadius: 16 }}
                yAxisSuffix=""

            />
        </View>
    );
};

export default Histogram;