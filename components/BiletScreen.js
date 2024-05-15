import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BiletScreen = () => {
  const [startDate, setStartDate] = useState(new Date().getTime() - 3600000); // Bir saat geri al (3600000 milisaniye)
  const [endDate, setEndDate] = useState(startDate + 86400000); // Bir gün sonraya ayarla (86400000 milisaniye)
  const [remainingTime, setRemainingTime] = useState(0);
  const [randomNumber, setRandomNumber] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => clearInterval(timer); // Timer'i dispose et

  }, []);

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []);

  const updateRemainingTime = () => {
    const now = new Date().getTime();
    const remaining = endDate - now;
    setRemainingTime(remaining);
  };

  const dateFormatter = (duration) => {
    const date = new Date(Date.now() + duration);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const formatRemainingTime = (duration) => {
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return `${hours}:${minutes}:${seconds}`;
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (99909999999999 - 16000000000000 + 1)) + 16000000000000;
    return String(randomNumber);
  };

  const generateRandomTime = () => {
    const currentDate = new Date();
    const randomHours = Math.floor(Math.random() * 5) + 1;
    const newDate = new Date(currentDate.getTime() - randomHours * 60 * 60 * 1000);
    return newDate;
  };

  const add24HoursToDateTime = (randomTime) => {
    const newDate = new Date(randomTime.getTime() + 24 * 60 * 60 * 1000);
    return newDate;
  };

  const countdownToNewDate = (targetDateTime) => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDateTime - currentDate;

      const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const countdownDisplay = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        console.log("Hedef tarih geçti!");
      }
    }, 1000);

    return countdownInterval;
  };

  const randomTime = generateRandomTime();
  const newDate = add24HoursToDateTime(randomTime);

  countdownToNewDate(newDate);


  return (
    <View
      style={{
        flex: 1,
        margin: 25,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 340,
          height: 102,
          position: "relative",
          backgroundColor: "white",
          shadowColor: "rgba(0, 0, 0, 0.25)",
          shadowOffset: { width: 2, height: 2 },
          shadowRadius: 5,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            width: 340,
            height: 43,
            position: "absolute",
            backgroundColor: "#EF4140",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <Text
          style={{
            width: 69,
            position: "absolute",
            color: "white",
            fontSize: 12,
            fontWeight: "800",
            letterSpacing: 0.18,
            //wordWrap: "break-word",
            top: 14,
            left: 20,
          }}
        >
          ATENTIE!
        </Text>
        <Text
          style={{
            width: 285,
            position: "absolute",
            color: "black",
            fontSize: 12,
            fontWeight: "200",
            letterSpacing: 0.18,
            //wordWrap: "break-word",
            top: 60,
            left: 10,
          }}
        >
          La urcarea in mijlocul de transport este obligatorie activarea
          titlului tarifar.
        </Text>
      </View>

      {/* Bilet */}
      <View
        style={{
          paddingLeft: 20,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          borderRadius: 3,
          marginTop: 48,
          height: 320,
          width: 320,
          borderRadius: 5,
          shadowColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
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
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#94B986",
              }}
            >
              1.
            </Text>
            <Ionicons name="pricetag" size={16} color="#609B47" style={{}} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#609B47",
              }}
            >
              Abonament 1 zi
            </Text>
          </View>
          <View
            style={{
              flexDirection: "colmuns", // Burada 'columns' yazım hatası, 'column' olmalı
              marginLeft: 5,
              borderRadius: 3,
              width: 240,
              height: 60,
              alignItems: "left",
            }}
          >
            <Text
              style={{ fontSize: 12, color: "#656565" }}
            >
              Grup urban
            </Text>
            <Text
              style={{ fontSize: 12, color: "#656565" }}
            >
              Valid de la: <Text style={{ fontWeight: "bold"}}>{dateFormatter(startDate)}</Text>
            </Text>
            <Text
              style={{ fontSize: 12, color: "#656565" }}
            >
              Valid pâna la: <Text style={{ fontWeight: "bold"}}>{dateFormatter(endDate)}</Text>
            </Text>
            <Text style={{ color: '#646464', fontSize: 12 }}>
              Timp ramas:&nbsp; 
              <Text style={{ color: '#2BAF69', fontWeight: "bold"}}>{formatRemainingTime(remainingTime)}</Text>
            </Text>
            <Text
              style={{ fontSize: 12, color: "#656565" }}
            >
              Cod titlu tarifar: <Text style={{ fontWeight: "bold"}}>{randomNumber}</Text>
            </Text>

            <Image
              source={require("../assets/qrCode.png")}
              style={{
                marginTop: 20,
                marginLeft: 75,
                width: 116,
                height: 116,

                position: "relative",
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BiletScreen;
