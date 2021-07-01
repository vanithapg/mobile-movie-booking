import React, { useEffect } from "react";
import { getLatestMovies } from "../redux/actions/movies";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

import { Link } from "react-router-native";
import { SearchBar } from "react-native-elements";

export default function Latest() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(getLatestMovies());
  }, []);

  console.log("from API", movies);
  return (
    <ScrollView>
      <SearchBar placeholder="Type Here..." onChangeText={""} value={""} />
      <View>
        <Text> Latest Movies</Text>
        {movies.loading && <Text>Loading...</Text>}
        {movies.length === 0 && !loading && (
          <Text>No food recipies available!</Text>
        )}
        {error && !loading && <Text>{error}</Text>}
        {movies.length > 0 &&
          movies.map((movie, i) => (
            <View key={i}>
              {/* <Image source={{ uri: `${movie.url}` }} /> */}
              <Image
                style={styles.poster}
                source={{
                  uri: `${movie.imageUrl}`,
                }}
              />
              <Text>{movie.name}</Text>
              <Link
                to={`/moviedetails/${movie._id}`}
                underlayColor="#f0f4f7"
                style={styles.subNavItem}
              >
                <Text>Movie Detail </Text>
              </Link>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}
