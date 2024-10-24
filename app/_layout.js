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
      <Stack.Screen name="carsingle/id" options={{ title: "Informações" }} />
      <Stack.Screen name="about2" options={{ title: "Sobre o app" }} />
      <Stack.Screen name="brands" options={{ title: "Marcas" }} />
      <Stack.Screen name="brandsingle/id" options={{ title: "Informações" }} />
      <Stack.Screen name="flex" options={{ title: "flex" }} />
      <Stack.Screen name="flex2" options={{ title: "Body Kits" }} />
      <Stack.Screen name="bodykitsingle/id" options={{ title: "Informações" }} />
      <Stack.Screen name="firebase" options={{title: "Banco de preços"}}/>
      <Stack.Screen name="firebaseCrud" options={{title: "Adicionar carro ao banco de preços"}}/>
    </Stack>
  );
}