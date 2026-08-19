import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type PerfilNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Perfil'
>;

const CLAVE_PERFIL = 'perfiles';

type Perfil = {
  nombre: string;
  edad: string;
  carrera: string;
};

export default function PerfilScreen() {
  const navigation = useNavigation<PerfilNavigationProp>();

  const [perfiles, setPerfiles] = useState<Perfil[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargarPerfiles = async () => {
    try {
      setCargando(true);

      const json = await AsyncStorage.getItem(CLAVE_PERFIL);

      setPerfiles(json ? JSON.parse(json) : []);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      cargarPerfiles();
    }, [])
  );

  const eliminarPerfil = async (indice: number) => {
    try {
      const actualizados = perfiles.filter(
        (_, i) => i !== indice
      );

      await AsyncStorage.setItem(
        CLAVE_PERFIL,
        JSON.stringify(actualizados)
      );

      setPerfiles(actualizados);
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'No se pudo eliminar el perfil.'
      );
    }
  };

  const eliminarTodos = async () => {
    try {
      await AsyncStorage.removeItem(CLAVE_PERFIL);
      setPerfiles([]);

      Alert.alert(
        'Listo',
        'Todos los perfiles fueron eliminados.'
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        👥 Lista de perfiles
      </Text>

      {cargando ? (
        <Text>Cargando...</Text>
      ) : perfiles.length === 0 ? (
        <Text>No hay perfiles guardados.</Text>
      ) : (
        <FlatList
          data={perfiles}
          keyExtractor={(_, index) =>
            index.toString()
          }
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.texto}>
                Nombre: {item.nombre}
              </Text>

              <Text style={styles.texto}>
                Edad: {item.edad}
              </Text>

              <Text style={styles.texto}>
                Carrera: {item.carrera}
              </Text>

              <Button
                title="Eliminar"
                color="#c0392b"
                onPress={() =>
                  eliminarPerfil(index)
                }
              />
            </View>
          )}
        />
      )}

      <View style={styles.espacio} />

      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.espacio} />

      <Button
        title="Eliminar todos"
        color="#c0392b"
        onPress={eliminarTodos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
  },

  texto: {
    fontSize: 16,
    marginBottom: 5,
  },

  espacio: {
    height: 10,
  },
});