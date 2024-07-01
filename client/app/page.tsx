'use client';

import React, { Suspense } from 'react';
import { useMovies } from '@/app/api/useMovies';

import MovieList from '@/app/now-playing/page';
import MovieCardSkeleton from '@/app/components/MovieCardSkeleton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Suspense fallback={<MovieCardSkeleton />}>
        <MovieList />
      </Suspense>
    </main>
  );
}
