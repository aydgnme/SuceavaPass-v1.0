import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FontAwesome5,
  Linking,
} from "react-native";
import { IconContext } from "react-icons";
import { Ionicons, FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";
import { WebView } from "react-native-webview";
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const AcasaScreen = () => {

  const navigation = useNavigation();

  const handleTextClick = () => {
    // Navigate to BiletScreen
    navigation.navigate('Titluri tarifare active');
  };

  const [lastSyncDate, setLastSyncDate] = useState(null);

  useEffect(() => {
    // Bu useEffect, komponentin yüklendiğinde bir kere çalışacak
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    setLastSyncDate(formattedDate);
  }, []);

  return (
    // Acasa ekranı içeriği
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          backgroundColor: "#5F9B48",
          padding: 10,
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 3,
          width: 340,
          height: 40,
          alignItems: "center",
        }}
      >
        <Ionicons
          name="person"
          size={20}
          color="white"
          style={{
            marginRight: 8,
            marginLeft: 16,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "300",
          }}
        >
          Mert Aydogan
        </Text>
      </View>
      {/* Titluri tarifare */}
      <View
        style={{
          padding: 10,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          borderRadius: 3,
          marginTop: 16,
          height: 133,
          width: 320,
          borderRadius: 5,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 12,
            color: "#666666",
            marginRight: 10,
          }}
        >
          Ultima sincronizare: {lastSyncDate}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderRadius: 3,
              width: 240,
              height: 60,
              alignItems: "center",
            }}
          >
            <Ionicons name="pricetag" size={16} color="black" style={{}} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Status titluri tarifare
            </Text>
            <Ionicons
              name="pricetag"
              size={24}
              color="#000"
              style={{ marginTop: 65 }}
            />
          </View>
          <View
            style={{
              flexDirection: "colmuns",
              //marginTop: -10,
              marginLeft: 5,
              borderRadius: 3,
              width: 240,
              height: 60,
              alignItems: "left",
            }}
          >
            <TouchableOpacity onPress={handleTextClick}>
              <Text style>
                <Text style={{ color: "rgb(37,101,52)" }}>1</Text> titluri
                tarifare active{" "}
                <AntDesign
                  name="arrowright"
                  size={16}
                  color={"rgb(95,155,71)"}
                />
              </Text>
            </TouchableOpacity>
            <Text style="t105">
              <Text style={{ color: "rgb(103,159,80)" }}>8</Text> titluri
              tarifare disponsibile{" "}
              <AntDesign name="arrowright" size={16} color={"rgb(95,155,71)"} />
            </Text>
          </View>
        </View>
      </View>
      <View style={Acasastyles.container}>
        <Text style={Acasastyles.header}>Accesare rapidă</Text>

        {/* Liste */}
        <View style={Acasastyles.buttonContainer}>
          {/* 1. Buton */}
          <View style={Acasastyles.buttonRow}>
            <Ionicons
              name="cart"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
            <View style={Acasastyles.buttonTextContainer}>
              <Text style={Acasastyles.buttonText}>Cumpara titlu tarifar</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
          </View>
          <View style={Acasastyles.separator}></View>

          {/* 2. Buton */}
          <View style={Acasastyles.buttonRow}>
            <Ionicons
              name="checkbox"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
            <View style={Acasastyles.buttonTextContainer}>
              <Text style={Acasastyles.buttonText}>Activare titlu tarifar</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
          </View>
          <View style={Acasastyles.separator}></View>

          {/* 3. Buton */}
          <View style={Acasastyles.buttonRow}>
            <Ionicons
              name="checkmark-done"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
            <View style={Acasastyles.buttonTextContainer}>
              <Text style={Acasastyles.buttonText}>
                Titluri tarifare active
              </Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
          </View>
          <View style={Acasastyles.separator}></View>

          {/* 4. Buton */}
          <View style={Acasastyles.buttonRow}>
            <Ionicons
              name="bookmarks"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
            <View style={Acasastyles.buttonTextContainer}>
              <Text style={Acasastyles.buttonText}>Card calatorie</Text>
              <View style={Acasastyles.separator}></View>
            </View>

            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={Acasastyles.buttonIcon}
            />
          </View>
        </View>
      </View>

      {/* Register v2 */}
      <View style={{ position: "absolute", bottom: -85, right: 5, margin: 0 }}>
        <Icon color="#5F9B48" type="ionicon" name="scan" reverse size={27} />
      </View>
    </View>
  );
};

const CardCalatorieScreen = () => (
  <View>
    <WebView
      source={{ uri: "https://tplsv.ro/#/login" }}
      style={{ flex: 1, width: "100%" }}
    />
  </View>
);

const TitluriTarifaceDisponibileScreen = () => {
  const handleLogin = () => {
    console.log("tikla");
  };

  const [lastSyncDate, setLastSyncDate] = useState(null);

  useEffect(() => {
    // Bu useEffect, komponentin yüklendiğinde bir kere çalışacak
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    setLastSyncDate(formattedDate);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 12,
          color: "#000",
          margin: 10,
        }}
      >
        Ultima sincronizare: {lastSyncDate}
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 5,
          width: 340,
          height: "auto",
          shadowRadius: 2,
          shadowColor: "gray",
          shadowOpacity: 0.25,
          shadowOffset: 0.5,
          //alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              fontStyle: "italic",
              color: "#666666",
              fontWeight: "300",
            }}
          >
            Nu există titluri tarifare desposibile
          </Text>
        </View>
        <View style={{ Left: 0 }}>
          <IconContext.Provider value={{ color: "white", size: "24px" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "center",
                height: 44,
                width: 220,
                backgroundColor: "#5F9B48",
                borderRadius: 10,
                marginTop: 10,
              }}
              onPress={handleLogin}
            >
              <Entypo name="shopping-cart" size={27} color="white" style={{}} />
              <Text style={{ color: "white", fontSize: 16 }}>
                Cumpără titluri tarifare
              </Text>
              {/*<IoLogIn style={styles.loginButtonIcon} />*/}
            </TouchableOpacity>
          </IconContext.Provider>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#f0f0f0",
            padding: 10,
            textAlign: "center",
            right: 0,
          }}
        >
          <Icon
            reverse
            name="filter"
            type="font-awesome"
            color="#5F9B48"
            size={27}
          />
        </View>
      </View>
    </View>
  );
};

const MainScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: { backgroundColor: "#5F9B48", bottom: 0 }, // Tab arka plan rengi
      indicatorStyle: { backgroundColor: "#7DCB5D" }, // Seçili olan Tab'ın alt çubuğunun rengi
      activeTintColor: "#D3E5CB",
      inactiveTintColor: "#D3E5CB",
      scrollEnabled: false, // Yatay kaydı devre dışı bırak
    }}
    swipeEnabled={false}
  >
    <Tab.Screen
      name="Acasa"
      component={AcasaScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={24} color={color} />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 10, color: "#D3E5CB" }}>Acasă</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Card"
      component={CardCalatorieScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="bookmarks" size={27} color={color} />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 10, color: "#D3E5CB" }}>Card Călătorie</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Titluri Tariface Disponibile"
      component={TitluriTarifaceDisponibileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="pricetags" size={24} color={color} />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 10, color: "#D3E5CB" }}>
            Titluri Tariface Disponibile
          </Text>
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 41,
  },
  logoImage: {
    width: 227,
    height: 60,
  },
  t105: {
    fontSize: 16,
    color: "#666666",
  },
});

const Acasastyles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginTop: 16,
    width: 320,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  buttonTextContainer: {
    marginLeft: 5,
    flex: 1,
  },
  buttonText: {
    marginLeft: 5,
  },
  buttonIcon: {
    marginLeft: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginBottom: 5,
  },
});

export default MainScreen;
