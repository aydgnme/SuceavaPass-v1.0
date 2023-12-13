import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BiletScreen = () => {
  const randomTime = generateRandomTime();
  const randomNum = generateRandomNumber();
  const newDate = add24HoursToDateTime(randomTime);
  var targetDateTime = add24HoursToDateTime(randomTime);
countdownToNewDate(targetDateTime);

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
              style={{ fontSize: 12, fontWeight: "bold", color: "#656565" }}
            >
              Grup urban
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#656565" }}
            >
              Valid de la: {randomTime}
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#656565" }}
            >
              Valid pâna la: {newDate}
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#656565" }}
            >
              Timp ramas: {/* log */}
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#656565" }}
            >
              Cod titlu tarifar: {randomNum}
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

const randomHourDifference = Math.floor(Math.random() * 5) + 1;

function generateRandomNumber() {
  var lowerBound = 16000000000000;
  var upperBound = 99909999999999;
  //long randomNumber = lowerBound + arc4random() % (upperBound - lowerBound);
  const randomNumber =
    Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

  return String(randomNumber);
}

function generateRandomTime() {
  // Güncel tarih ve saat bilgisini al
  const currentDate = new Date();

  // Rasgele saat ekleyerek yeni bir tarih oluştur
  const randomHours = randomHourDifference;
  const newDate = new Date(
    currentDate.getTime() - randomHours * 60 * 60 * 1000
  );

  // Tarih ve saat bilgisini istenen formatta formatla
  const formattedDate = `${newDate.getDate().toString().padStart(2, "0")}-${(
    newDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${newDate.getFullYear()} ${newDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${newDate.getMinutes().toString().padStart(2, "0")}`;

  return formattedDate;
}

// Bu kısmı eklemeniz gerekiyor
function getFormattedDate() {
  var currentDate = new Date();
  var formattedDate = `${String(currentDate.getDate()).padStart(
    2,
    "0"
  )}-${String(currentDate.getMonth() + 1).padStart(
    2,
    "0"
  )}-${currentDate.getFullYear()} ${String(currentDate.getHours()).padStart(
    2,
    "0"
  )}:${String(currentDate.getMinutes()).padStart(2, "0")}`;
  return formattedDate;
}

function add24HoursToDateTime(randomTime) {
  // Giriş tarihini ve saati ayrıştır
  var dateTimeParts = randomTime.split(" ");
  var datePart = dateTimeParts[0];
  var timePart = dateTimeParts[1];

  var dateParts = datePart.split("-");
  var day = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10);
  var year = parseInt(dateParts[2], 10);

  var timeParts = timePart.split(":");
  var hours = parseInt(timeParts[0], 10);
  var minutes = parseInt(timeParts[1], 10);

  // Giriş tarihine ve saate 24 saat ekleyerek yeni bir tarih oluştur
  var currentDate = new Date(year, month - 1, day, hours, minutes); // JavaScript'te aylar 0'dan başlar
  var newDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  // Yeni tarih bilgisini formatla
  var newDay = newDate.getDate();
  var newMonth = newDate.getMonth() + 1;
  var newYear = newDate.getFullYear();

  // Saat ve dakika bilgilerini formatla
  var newHours = newDate.getHours();
  var newMinutes = newDate.getMinutes();

  // Yeni tarih ve saat bilgisini istediğiniz formatta birleştir
  var formattedNewDateTime = `${newDay < 10 ? "0" + newDay : newDay}-${
    newMonth < 10 ? "0" + newMonth : newMonth
  }-${newYear} ${newHours < 10 ? "0" + newHours : newHours}:${
    newMinutes < 10 ? "0" + newMinutes : newMinutes
  }`;

  return formattedNewDateTime;
}

function countdownToNewDate(targetDateTime) {
  // Hedef tarihi ve saatini ayrıştır
  var targetDateTimeParts = targetDateTime.split(" ");
  var targetDatePart = targetDateTimeParts[0];
  var targetTimePart = targetDateTimeParts[1];

  var targetDateParts = targetDatePart.split("-");
  var targetDay = parseInt(targetDateParts[0], 10);
  var targetMonth = parseInt(targetDateParts[1], 10);
  var targetYear = parseInt(targetDateParts[2], 10);

  var targetTimeParts = targetTimePart.split(":");
  var targetHours = parseInt(targetTimeParts[0], 10);
  var targetMinutes = parseInt(targetTimeParts[1], 10);

  // Hedef tarih ve saatini içeren bir Date nesnesi oluştur
  var targetDate = new Date(targetYear, targetMonth - 1, targetDay, targetHours, targetMinutes);

  // Her 1 saniyede bir güncellenen bir fonksiyon kullanarak geri sayım yap
  var countdownInterval = setInterval(function () {
    // Şu anki tarihi ve saatı al
    var currentDate = new Date();

    // Kalan süreyi hesapla
    var timeDifference = targetDate - currentDate;

    // Kalan süreyi saat, dakika ve saniye olarak ayarla
    var remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
    var remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Geri sayımı HH:mm:ss formatında göster
    var countdownDisplay =
      (remainingHours < 10 ? "0" + remainingHours : remainingHours) +
      ":" +
      (remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes) +
      ":" +
      (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

    // Geri sayımı ekrana yazdır
    console.log(countdownDisplay);

    // Hedef tarih geçmişse interval'i temizle
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      console.log("Hedef tarih geçti!");
    }
  }, 1000); // 1 saniye interval

  // İlk geri sayım durumunu göster
  console.log("Geri sayım başladı:");

  return countdownInterval;
}

export default BiletScreen;
