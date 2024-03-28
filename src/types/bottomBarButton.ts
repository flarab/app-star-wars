import { ReactElement } from 'react';

export type BottomBarButton = {
    label: ReactElement;
    onPress: () => void;
};