import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const capitals = [
  {
    name: "Brasília",
    latitude: -15.7801,
    longitude: -47.9292,
    info: "Capital do Brasil e do Distrito Federal",
  },
  {
    name: "São Paulo",
    latitude: -23.5505,
    longitude: -46.6333,
    info: "Capital do estado de São Paulo",
  },
  {
    name: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
    info: "Capital do estado do Rio de Janeiro",
  },
  {
    name: "Salvador",
    latitude: -12.9714,
    longitude: -38.5014,
    info: "Capital do estado da Bahia",
  },
  {
    name: "Belo Horizonte",
    latitude: -19.9167,
    longitude: -43.9345,
    info: "Capital do estado de Minas Gerais",
  },
  {
    name: "Fortaleza",
    latitude: -3.7172,
    longitude: -38.5434,
    info: "Capital do estado do Ceará",
  },
  {
    name: "Curitiba",
    latitude: -25.429,
    longitude: -49.267,
    info: "Capital do estado do Paraná",
  },
  {
    name: "Manaus",
    latitude: -3.119,
    longitude: -60.0217,
    info: "Capital do estado do Amazonas",
  },
  {
    name: "Recife",
    latitude: -8.0476,
    longitude: -34.877,
    info: "Capital do estado de Pernambuco",
  },
  {
    name: "Porto Alegre",
    latitude: -30.0346,
    longitude: -51.2177,
    info: "Capital do estado do Rio Grande do Sul",
  },
];

export default function App() {
  const [customMarkers, setCustomMarkers] = useState([]);

  const handleMapPress = (event) => {
    console.log(event.nativeEvent);
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCustomMarkers((prevMarkers) => [
      ...prevMarkers,
      { latitude, longitude },
    ]);
  };

  return (
    <MapView
      onPress={handleMapPress}
      provider="google"
      style={styles.map}
      initialRegion={{
        latitude: -28.26548551352196,
        longitude: -52.397489334006785,
        latitudeDelta: 30,
        longitudeDelta: 30,
      }}
    >
      {/* <Marker
        coordinate={{
          latitude: -28.26548551352196,
          longitude: -52.397489334006785,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      /> */}

      {customMarkers.map((item, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 30,
            longitudeDelta: 30,
          }}
        ></Marker>
      ))}

      {capitals.map((item, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 30,
            longitudeDelta: 30,
          }}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text>{item.info}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
  callout: {
    width: 150,
    padding: 5,
  },
});
