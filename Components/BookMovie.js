import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { styles } from "./styles";
// import DatePicker from "react-native-date-picker";
import { Input } from "react-native-elements";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function BookMovie() {
  let { _id } = useParams();

  const movies = useSelector((state) => state.movies.movies);

  const [movieId, setMovieId] = useState(_id);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [seats, setSeats] = useState(1);
  const [ticket, setTicket] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

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
    setShow(true);
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Text>Movie Name: {name}</Text>
      <Image
        style={styles.poster}
        source={{
          uri: `${imageUrl}`,
        }}
      />
      {/* <DatePicker mode="date" date={date} onDateChange={setDate} /> */}
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
      <Input placeholder="Enter Date" onChange={setDate} />
      <Input placeholder="Enter seat count" onChange={setSeats} />

      <Button
        onPress={generateQR}
        title="Submit"
        color="#841584"
        accessibilityLabel="Click to book movie"
      />
      {ticket ? (
        <View>
          <Text>Ticket Booked !!</Text>
          <QRCode value={JSON.stringify(name + date + seats)} />
        </View>
      ) : (
        <Text> Please book your ticket </Text>
      )}
    </View>
  );
}
