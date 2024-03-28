import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Title;