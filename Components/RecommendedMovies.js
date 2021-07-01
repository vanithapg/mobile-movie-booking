import React, { useEffect } from "react";
import Movie from "./Movie";
import { Image, Button, Card, CardGroup, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMovies } from "../redux/actions/movies";
import { useDispatch, useSelector } from "react-redux";

export default function RecommendedMovies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  console.log("from API", movies);
  return (
    <>
      {movies.loading && <p>Loading...</p>}
      {movies.length === 0 && !loading && <p>No movie available!</p>}
      {error && !loading && <p>{error}</p>}
      <center>
        <Carousel>
          {movies.length > 0 &&
            movies.map((movie) => (
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-40"
                  src={movie.url}
                  alt={movie.name}
                  className="carousel"
                />
                <Carousel.Caption>
                  <h3>{movie.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </center>
      <br></br>
      <h3> Recommended Movies</h3>

      <center>
        <CardGroup className="custom1">
          {movies.length > 0 &&
            movies.map((movie) => (
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={movie.url} />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                  <Button variant="warning">
                    <Link to={`/bookmovie/${movie._id}`} key={movie._id}>
                      Book
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </CardGroup>
      </center>
    </>
  );
}
