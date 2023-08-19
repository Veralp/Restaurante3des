import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import styles from './styles'

const MapScreen = () => {
  const latitude = -22.7033042;
  const longitude = -46.9930900;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.009, // Zoom
          longitudeDelta: 0.004, // Zoom
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="Restaurante"
          description="Posição do restaurante"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;