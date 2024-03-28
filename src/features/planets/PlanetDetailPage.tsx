import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const PlanetDetailPage: React.FC = () => {
    const selectedPlanet = useSelector((state: RootState) => state.planets.selectedPlanet);

    if (!selectedPlanet) {
        return <Text>No se ha seleccionado ningún planeta</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedPlanet.name}</Text>
            <Text style={styles.info}>Período de Rotación: {selectedPlanet.rotation_period} horas</Text>
            <Text style={styles.info}>Período Orbital: {selectedPlanet.orbital_period} días</Text>
            <Text style={styles.info}>Diámetro: {selectedPlanet.diameter} km</Text>
            <Text style={styles.info}>Clima: {selectedPlanet.climate}</Text>
            <Text style={styles.info}>Gravedad: {selectedPlanet.gravity}</Text>
            <Text style={styles.info}>Terreno: {selectedPlanet.terrain}</Text>
            <Text style={styles.info}>Superficie de Agua: {selectedPlanet.surface_water}%</Text>
            <Text style={styles.info}>Población: {selectedPlanet.population}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default PlanetDetailPage;
