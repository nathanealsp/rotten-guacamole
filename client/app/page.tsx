'use client';

import React from 'react';
import { useMovies } from '@/app/api/useMovies';

import Moviecard from '@/app/components/MovieCard';

export default function Home() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {data?.map((movie) => (
          <li key={movie.id}>
            <Moviecard movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
