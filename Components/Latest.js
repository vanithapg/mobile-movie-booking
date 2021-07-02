import React, { useEffect } from "react";
import { getLatestMovies } from "../redux/actions/movies";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Card, SearchBar } from "react-native-elements";
import { Link } from "react-router-native";

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar placeholder="search movies" onChangeText={""} value={""} />
        <Text> Latest Movies</Text>
        {movies.loading && <Text>Loading...</Text>}
        {movies.length === 0 && !loading && <Text>No movies available!</Text>}
        {error && !loading && <Text>{error}</Text>}
        {movies.length > 0 &&
          movies.map((movie, i) => (
            <View key={i}>
              <Card>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: `${movie.imageUrl}` }}>
                  <Link to={`/moviedetails/${movie._id}`}>
                    <Text style={styles.button}>Movie Details</Text>
                  </Link>
                </Card.Image>
              </Card>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
