import React from 'react';
import {View, Button, TextInput, Image} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {styles} from './LoginPage.styles';

const LoginPage: React.FC = () => {
    const {handleLogin} = useAuth();

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/icon.png')} style={styles.logo}/>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Contraseña"
            />
            <Button
                title="Iniciar Sesión"
                onPress={handleLogin}
            />
        </View>
    );
};

export default LoginPage;