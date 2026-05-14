import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {

  return (

    <Tabs
      screenOptions={{

        headerShown: false,

        tabBarActiveTintColor: "#fff",

        tabBarInactiveTintColor: "#862544ff",

        tabBarStyle: {
          backgroundColor: "#d6507dff",
          height: 60,
          paddingBottom: 1,
          paddingTop: 1,
        },

        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },

      }}
    >

      {/* INÍCIO */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* EXPLORAR */}

      <Tabs.Screen
        name="explorar"
        options={{
          title: "Explorar",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* PERFIL */}

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* ESCONDER TELAS */}

      <Tabs.Screen
        name="dashboard"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="cadastro"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="doacao"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          href: null,
        }}
      />

    </Tabs>
  );
}