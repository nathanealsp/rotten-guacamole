"use server";

import React from "react";
import { getMovieList } from "@/app/api/useMovies";

import Moviecard from "@/app/components/MovieCard";

export default async function MovieList() {
  const data = await getMovieList();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {data?.map((movie) => (
        <li key={movie.id}>
          <Moviecard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
