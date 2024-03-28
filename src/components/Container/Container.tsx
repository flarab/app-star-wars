import React from 'react';
import { View, ViewProps } from 'react-native';
import {styles} from "./Container.styles";

const Container: React.FC<ViewProps> = (props) => {
    return <View style={[styles.container, props.style]} {...props} />;
};

export default Container;