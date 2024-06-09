"use client"; // onclick 이벤트 리스너가 서버에 없기 떄문에(BE에 없으므로) client component를 만들어 주어야 한다.

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      {title}
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
