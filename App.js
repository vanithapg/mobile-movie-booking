import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Latest from "./Components/Latest";
import BookMovie from "./Components/BookMovie";
import Movie from "./Components/Movie";
import { styles } from "./Components/styles";

import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Mobile Booking</Text>
        <StatusBar style="auto" />
      </View>

      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.button}>Home</Text>
            </Link>
          </View>
          <Route exact path="/" component={Latest} />
          <Route path="/moviedetails/:_id" component={Movie} />
          <Route path="/bookmovie/:_id" component={BookMovie} />
        </View>
      </NativeRouter>
    </Provider>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
