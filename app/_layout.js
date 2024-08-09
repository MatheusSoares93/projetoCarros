import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0066CC", // Cor de fundo do cabeçalho em preto
        },
        headerTintColor: "#fff", // Cor do texto do cabeçalho em vermelho
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Carros do Soares " }} /> {/* Título da tela inicial */}
      <Stack.Screen name="products" options={{ title: "Carros" }} /> {/* Título da tela de produtos */}
      <Stack.Screen name="car/[id]" options={{ title: 'Informações' }} /> {/* Título da tela de detalhes do carro */}
    </Stack>
  );
}