import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Latest from "./Components/Latest";
import BookMovie from "./Components/BookMovie";
import Movie from "./Components/Movie";

import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Text>Mobile Booking</Text>
          <StatusBar style="auto" />
        </View>

        <Route exact path="/" component={Latest} />
        <Route path="/moviedetails/:_id" component={Movie} />
        <Route path="/bookmovie/:_id" component={BookMovie} />
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
