import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const FirstScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>1. Screen</Text>
    </View>
  );
};

const SecondScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>2. Screen</Text>
    </View>
  );
};

const ThirdScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>3. Screen</Text>
    </View>
  );
};

const FourthScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>4. Screen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FirstScreen" component={FirstScreen} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
        <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
        <Tab.Screen name="FourthScreen" component={FourthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
