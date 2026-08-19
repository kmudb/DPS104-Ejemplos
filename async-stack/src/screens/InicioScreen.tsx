import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type InicioNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Inicio'
>;

const CLAVE_PERFIL = 'perfiles';

const carreras = [
  'Ingeniería en Sistemas',
  'Ingeniería en Computación',
  'Ingeniería Industrial',
  'Ingeniería Electrónica',
  'Ingeniería en Telecomunicaciones',
  'Ingeniería Mecatrónica',
];

export default function InicioScreen() {
  const navigation = useNavigation<InicioNavigationProp>();

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [carrera, setCarrera] = useState('');

  const guardarPerfil = async () => {
    if (!nombre.trim() || !edad.trim() || !carrera) {
      Alert.alert(
        'Atención',
        'Completa el nombre, la edad y selecciona una carrera.'
      );
      return;
    }

    try {
      const nuevoPerfil = {
        nombre: nombre.trim(),
        edad: edad.trim(),
        carrera,
      };

      const json = await AsyncStorage.getItem(CLAVE_PERFIL);

      const perfiles = json ? JSON.parse(json) : [];

      perfiles.push(nuevoPerfil);

      await AsyncStorage.setItem(
        CLAVE_PERFIL,
        JSON.stringify(perfiles)
      );

      Alert.alert('Listo', 'Perfil guardado correctamente.');

      setNombre('');
      setEdad('');
      setCarrera('');

      navigation.navigate('Perfil');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo guardar el perfil.');
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>👤 Mi perfil</Text>

      <Text style={styles.etiqueta}>Nombre</Text>

      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Escribe tu nombre"
      />

      <Text style={styles.etiqueta}>Edad</Text>

      <TextInput
        style={styles.input}
        value={edad}
        onChangeText={setEdad}
        placeholder="Escribe tu edad"
        keyboardType="numeric"
      />

      <Text style={styles.etiqueta}>Carrera</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={carrera}
          onValueChange={(itemValue) => setCarrera(itemValue)}
        >
          <Picker.Item
            label="Selecciona una carrera"
            value=""
          />

          {carreras.map((item) => (
            <Picker.Item
              key={item}
              label={item}
              value={item}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.espacio} />

      <Button
        title="Guardar perfil"
        onPress={guardarPerfil}
      />

      <View style={styles.espacio} />

      <Button
        title="Ver perfiles"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  etiqueta: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },

  espacio: {
    height: 12,
  },
});