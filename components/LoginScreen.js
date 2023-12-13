import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native"; // Image eklenmiştir
import { Icon } from "@rneui/themed";
import { IconContext } from "react-icons";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Acasă');
  };
  const [email, setEmail] = useState("mertaydogn0@gmail.com");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLogin, setisLogin] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const toggleLogin = () => {
    setisLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email adresinizi girin"
        />
        <View style={styles.inputUnderline}></View>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordHidden}
            placeholder="Parolă"
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Feather
              name={isPasswordHidden ? "eye-off" : "eye"}
              size={16}
              color="#5F9B48"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputUnderline}></View>

        {/* Password Info Container */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordInfoText}>Păstrează-mă logat</Text>
          <TouchableOpacity
            onPress={toggleLogin}
            style={styles.passwordInfoIcon}
          >
            <AntDesign
              name={isLogin ? "checkcircle" : "checkcircle"}
              size={16}
              color="#5F9B48"
              style={styles.passwordInfoIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Login Button */}
      <IconContext.Provider value={{ color: "white", size: "24px" }}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Icon
            color="#fff"
            
            name="log-in"
            
            size={24}
            solid
            type="ionicon"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.loginButtonText}>Conectare</Text>
          {/*<IoLogIn style={styles.loginButtonIcon} />*/}
        </TouchableOpacity>
      </IconContext.Provider>

      {/* Register Button */}
      <IconContext.Provider value={{ color: "white", size: "24px" }}>
        <TouchableOpacity
          style={styles.registerButton}
          onClick={() => console.log("Button pressed")}
        >
          <Text style={styles.registerButtonText}>Înregistrare</Text>
          {/*<IoLogIn style={styles.loginButtonIcon} />*/}
        </TouchableOpacity>
      </IconContext.Provider>

      {/* Language Selection and Forget Password */}

      <View style={styles.languagecontainer}>
        {/* Sol tarafta resim */}
        <Image
          source={require("../assets/flag.png")}
          style={styles.flagImage}
          resizeMode="contain"
        />

        {/* Yanında yazı */}
        <Text style={styles.languageText}>Română</Text>

        {/* "Am uitat parola" yazısı */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Am uitat parola</Text>
        </TouchableOpacity>
      </View>

      {/* Register v2 */}
      <View style={styles.registerBtn}>
        <Icon
          color="#5F9B48"
          containerStyle={{}}
          disabledStyle={{}}
          iconProps={{}}
          iconStyle={{}}
          name="person-add"
          onLongPress={() => console.log("onLongPress()")}
          onPress={() => console.log("onPress()")}
          reverse
          size={27}
        />
      </View>

      {/* Diğer login bileşenleri buraya eklenebilir */}
    </View>
  );
};

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
  inputContainer: {
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 29,
  },
  inputLabel: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 0, // TextBox çerçevesini kaldırmak için
    borderBottomWidth: 1, // Alt çizgi eklemek için
    borderBottomColor: "rgb(200,199,203)", // Alt çizgi rengi
    paddingHorizontal: 0,
    fontSize: 16,
  },
  inputUnderline: {
    height: 0.1,
    backgroundColor: "rgb(200,199,203)",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(200,199,203)",
    paddingHorizontal: 0,
    fontSize: 16,
    alignItems: "flex-start",
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    marginRight: 8,
  },
  passwordInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  passwordInfoText: {
    fontSize: 12,
    marginRight: 8,
  },
  passwordInfoIcon: {
    marginRight: 16,
    position: "absolute",
    right: 0,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    height: 44,
    width: 325,
    backgroundColor: "#5F9B48",
    borderRadius: 10,
    marginTop: 30,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  loginButtonIcon: {
    marginLeft: 8,
    size: 16,
    color: "white",
  },
  registerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    height: 44,
    width: 325,
    borderRadius: 4,
    backgroundColor: "#5F9B48",
    borderRadius: 10,
    marginTop: 6,
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
  },
  languagecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  flagImage: {
    width: 60,
    height: 30,
  },
  languageText: {
    fontSize: 16,
    marginRight: "auto",
    left: -12,
  },
  forgotPasswordText: {
    fontSize: 16,
    marginRight: 10,
    color: "#5F9B48",
    textDecorationLine: "underline",
    left: 0,
  },
  registerBtn: {
    position: "absolute",
    bottom: -235,
    right: 5,
    margin: 0,
  },
});

export default LoginScreen;
