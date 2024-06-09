import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return { title: movie.title };
}
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>movieInfoLoading</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>movieVideosLoading</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
