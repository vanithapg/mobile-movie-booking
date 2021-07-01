import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, getMovies } from "../redux/actions/movies";
import { View, ScrollView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Link } from "react-router-native";
import { Card, Rating, Button, Icon } from "react-native-elements";

export default function Movie() {
  let { _id } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const [movieId, setMovieId] = useState(_id);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    setSelectedMovie(movies.find((f) => f._id == movieId));
    console.log(selectedMovie, "selectedMovie");
  }, []);

  const { name, rate, imageUrl, type } = selectedMovie
    ? selectedMovie
    : { name: "Sivaji", rate: "4.5" };

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>{name}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: `${imageUrl}` }}></Card.Image>
          <Text style={{ marginBottom: 10 }}>{type}</Text>
          <Rating showRating readonly startingValue={rate} />
        </Card>

        <Link to={`/bookmovie/${movieId}`}>
          <Text style={styles.button}>Book now </Text>
        </Link>
      </View>
    </ScrollView>
  );
}
