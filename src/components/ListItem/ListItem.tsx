import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from "./ListItem.styles";

interface ListItemProps {
    item: any;
    onPress: (item: any) => void;
}

const ListItem: React.FC<ListItemProps> = ({item, onPress}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export default ListItem;