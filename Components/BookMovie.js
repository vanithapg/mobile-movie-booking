import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import DatePicker from "react-native-datepicker";

export default function BookMovie() {
  let { _id } = useParams();

  const movies = useSelector((state) => state.movies.movies);

  const [movieId, setMovieId] = useState(_id);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [seats, setSeats] = useState(1);
  const [ticket, setTicket] = useState(false);
  // const [show, setShow] = useState(false);
  // const [date, setDate] = useState(new Date());

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  console.log("ID ", _id);

  useEffect(() => {
    console.log(
      movies.find((f) => f._id == movieId),
      "selected movie"
    );
    setSelectedMovie(movies.find((f) => f._id == movieId));
    console.log(selectedMovie, "selectedMovie");
  }, []);

  const { name, imageUrl, rate } = selectedMovie ? selectedMovie : undefined;
  console.log(name, rate);

  function generateQR() {
    setTicket(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          {ticket ? (
            <View style={styles.topic}>
              <Text>Ticket Booked !!</Text>
              <QRCode value={JSON.stringify(name + date + seats)} />
            </View>
          ) : (
            <Text> Please book your ticket </Text>
          )}

          <Text style={styles.topic}>{name}</Text>
          <Image
            style={styles.poster}
            source={{
              uri: `${imageUrl}`,
            }}
          />

          <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            // confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
          {/* {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )} */}
          <Input placeholder="Enter seat count" onChange={setSeats} />

          <Button
            onPress={generateQR}
            title="Submit"
            color="#841584"
            accessibilityLabel="Click to book movie"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
