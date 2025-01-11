import React from "react";
import { View, Text } from "react-native";

const WeatherCard = ({ date, temperature, description }) => {
  return (
    <View className="border border-gray-400 rounded p-4 my-2 bg-white shadow">
      <Text className="text-lg font-bold">{date}</Text>
      <Text>{temperature}°C</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default WeatherCard;