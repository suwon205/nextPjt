import { json } from "stream/consumers";
import Navigation from "../../components/navigation";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        ></Movie>
      ))}
    </div>
  );
}
