import React from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface GenericListProps<T> {
    data: T[];
    renderItem: ({ item }: { item: T }) => JSX.Element;
    keyExtractor: (item: T, index: number) => string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    errorMessage?: string;
}

function GenericList<T>({ data, renderItem, keyExtractor, status, errorMessage }: GenericListProps<T>) {
    if (status === 'loading') return <ActivityIndicator size="large" />;
    if (status === 'failed') return <Text style={styles.errorText}>{errorMessage || 'Error al cargar los datos'}</Text>;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});

export default GenericList;