import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0066CC", 
        },
        headerTintColor: "#fff", 
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", 
      }}
    >
      <Stack.Screen name="index" options={{ title: "Carros do Soares " }} />
      <Stack.Screen name="products" options={{ title: "Carros" }} />
      <Stack.Screen name="car/[id]" options={{ title: 'Informações' }} />
      <Stack.Screen name="about2" options={{ title: 'sobre2 wp' }} />
    </Stack>
  );
}