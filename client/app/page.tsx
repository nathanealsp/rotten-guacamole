import React, { Suspense } from 'react';

import MovieList from '@/app/components/MovieList';
import MovieCardSkeleton from '@/app/components/MovieCardSkeleton';

export const experimental_ppr = true;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Suspense fallback={<MovieCardSkeleton />}>
        <MovieList />
      </Suspense>
    </main>
  );
}
