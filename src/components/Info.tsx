import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface InfoProps {
    children: React.ReactNode;
}

const Info: React.FC<InfoProps> = ({ children }) => {
    return <Text style={styles.info}>{children}</Text>;
};

const styles = StyleSheet.create({
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default Info;