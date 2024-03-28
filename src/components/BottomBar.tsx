import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomBarButton} from '../types';

type BottomBarProps = {
    buttons: BottomBarButton[];
};

const BottomBar: React.FC<BottomBarProps> = ({buttons}) => {
    return (
        <View style={styles.container}>
            {buttons.map((button, index) => (
                <TouchableOpacity key={index} onPress={button.onPress} style={styles.button}>
                    {button.label}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BottomBar;