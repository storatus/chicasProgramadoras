import React from "react";
import { View, Text } from "react-native";

const FirstScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Text style={{ fontSize: 30, color: "#FF6666", fontWeight: "600" }}>
          Hola Maria,
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Encuentra y monitorea tus viajes
        </Text>
      </View>
    </View>
  );
};

export default FirstScreen;
