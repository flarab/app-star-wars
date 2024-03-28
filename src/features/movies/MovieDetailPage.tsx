import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomBarButton} from '../../types';
import {GlobeIcon, MaskIcon} from "../../components/Icons";
import BottomBar from "../../components/BottomBar";
import {useMovieDetails} from "../../hooks/useMovieDetails";

const MovieDetailPage: React.FC = () => {
    const {selectedMovie, navigateToCharacterList, navigateToPlanetList} = useMovieDetails();


    if (!selectedMovie) {
        return <Text>No se ha seleccionado ninguna película</Text>;
    }


    const bottomBarButtons: BottomBarButton[] = [
        {label: <MaskIcon/>, onPress: navigateToCharacterList},
        {label: <GlobeIcon/>, onPress: navigateToPlanetList},
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedMovie.title}</Text>
            <Text style={styles.info}>Fecha de Emisión: {selectedMovie.release_date}</Text>
            <Text style={styles.info}>Director(es): {selectedMovie.director}</Text>
            <Text style={styles.info}>ID de Episodio: {selectedMovie.episode_id}</Text>
            <Text style={styles.info}>Resumen: {selectedMovie.opening_crawl}</Text>
            <BottomBar buttons={bottomBarButtons}/>
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

export default MovieDetailPage;