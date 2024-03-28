import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const EyeIcon = () => {
    return <Ionicons name="eye" size={30} color="#000" />;
};

export const MaskIcon = () => {
    return <FontAwesome5 name="theater-masks" size={30} color="#000" />;
};

export const GlobeIcon = () => {
    return <FontAwesome name="globe" size={30} color="#000" />;
};

export const RulerIcon = () => {
    return <FontAwesome5 name="ruler" size={30} color="#000" />;
};

export const PopulationIcon = () => {
    return <FontAwesome name="users" size={30} color="#000" />;
};
