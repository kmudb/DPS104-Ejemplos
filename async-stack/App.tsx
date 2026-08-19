import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import InicioScreen from './src/screens/InicioScreen';
import PerfilScreen from './src/screens/PerfilScreen';

// Define aquí todas las pantallas del stack y sus parámetros.
// 'undefined' significa que la pantalla no recibe parámetros por route.params.
export type RootStackParamList = {
  Inicio: undefined;
  Perfil: undefined;
};

// Tipo de utilidad reutilizable si alguna pantalla necesita
// tipar sus props completas (navigation + route) de una sola vez.
export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen
              name="Inicio"
              component={InicioScreen}
              options={{ title: 'Inicio' }}
            />
            <Stack.Screen
              name="Perfil"
              component={PerfilScreen}
              options={{ title: 'Perfil' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
