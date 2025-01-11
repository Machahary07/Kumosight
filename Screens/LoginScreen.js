import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username) {
      navigation.navigate("Home");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <TextInput
        className="border border-gray-400 rounded p-2 w-3/4 mb-4"
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;