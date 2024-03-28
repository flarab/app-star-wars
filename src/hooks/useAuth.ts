import { useDispatch } from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { login } from '../features/auth/authSlice';
import {RootStackParamList} from "../types";

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = (): void => {
        dispatch(login());
        navigation.navigate('MovieList');
    };

    return { handleLogin };
};