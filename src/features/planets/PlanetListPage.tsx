import React from 'react';
import { BottomBarButton } from '../../types';
import BottomBar from "../../components/BottomBar";
import {PopulationIcon} from "../../components/Icons";
import Container from "../../components/Container";
import ListItem from "../../components/ListItem";
import GenericList from "../../components/GenericList";
import usePlanetList from "../../hooks/usePlanetList";


const PlanetListPage: React.FC = () => {
    const {
        planets,
        status,
        handleSelectPlanet,
        handlePlanetHistogram
    } = usePlanetList();

    const bottomBarButtons: BottomBarButton[] = [
        { label: <PopulationIcon/>, onPress:handlePlanetHistogram }
    ];

    return (
        <Container>
            <GenericList
                data={planets}
                renderItem={({item}) => (
                    <ListItem item={item} onPress={handleSelectPlanet} />
                )}
                keyExtractor={(_, index) => `planet-${index}`}
                status={status}
            />
            <BottomBar buttons={bottomBarButtons} />
        </Container>
    );
};

export default PlanetListPage;