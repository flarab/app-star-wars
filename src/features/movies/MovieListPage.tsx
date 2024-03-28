import React from 'react';
import Container from "../../components/Container";
import ListItem from "../../components/ListItem";
import GenericList from "../../components/GenericList";
import {useMoviesList} from "../../hooks/useMoviesList";

const MovieListPage = () => {
    const {
        movies,
        status,
        error,
        handleSelectMovie
    } = useMoviesList();

    return (
        <Container>
            <GenericList
                data={movies}
                renderItem={({item}) => (
                    <ListItem item={{ ...item, name: item.title }}  onPress={handleSelectMovie} />
                )}
                keyExtractor={(_, index) => `movie-${index}`}
                status={status}
            />
        </Container>
    );
}

export default MovieListPage;