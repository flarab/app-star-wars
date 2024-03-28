import React from 'react';
import BottomBar from "../../components/BottomBar";
import GenericList from "../../components/GenericList";
import {useCharacterList} from "../../hooks/useCharacterList";
import ListItem from "../../components/ListItem";
import Container from "../../components/Container";

const CharacterListPage: React.FC = () => {
    const {
        characters, status, handleSelectCharacter,
        bottomBarButtons
    } = useCharacterList();
    return (
        <Container>
            <GenericList
                data={characters}
                renderItem={({item}) => (
                    <ListItem item={item} onPress={handleSelectCharacter} />
                )}
                keyExtractor={(_, index) => `character-${index}`}
                status={status}
            />
            <BottomBar buttons={bottomBarButtons}/>
        </Container>
    );
};


export default CharacterListPage;