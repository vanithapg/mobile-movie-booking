import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  backImage: {
    flex: 1,
    flexDirection: "column",
  },
  thumb: {
    width: 50,
    height: 50,
  },
  poster: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "skyblue",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 25,
    alignSelf: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
