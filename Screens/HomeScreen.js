import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import * as Location from "expo-location";
import { fetchWeatherByLocation, fetchWeatherByCity } from "./utils/weatherApi.js";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      const data = await fetchWeatherByLocation(coords.latitude, coords.longitude);
      setWeatherData(data);
    })();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const data = await fetchWeatherByCity(search);
      setWeatherData(data);
    }
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-xl font-bold mb-4">Live Weather</Text>
      <TextInput
        className="border border-gray-400 rounded p-2 w-full mb-4"
        placeholder="Search city"
        value={search}
        onChangeText={setSearch}
      />
      <Button title="Search" onPress={handleSearch} />
      {weatherData && (
        <View className="mt-4">
          <Text className="text-lg font-bold">Today's Weather</Text>
          <Text>{weatherData.current?.temp}°C</Text>
          <FlatList
            data={weatherData.daily.slice(0, 7)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="my-2">
                <Text>{new Date(item.dt * 1000).toDateString()}</Text>
                <Text>{item.temp.day}°C</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;