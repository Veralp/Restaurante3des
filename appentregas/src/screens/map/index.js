import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import styles from './styles'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.703042, // Latitude da posição
          longitude: -46.9954954, // Longitude da posição
          latitudeDelta: 0.0922, // Zoom
          longitudeDelta: 0.0421, // Zoom
        }}
      />
    </View>
  );
};

export default MapScreen;