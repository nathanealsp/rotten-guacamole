'use client';
import Image from 'next/image';
import { useMovies } from '@/app/api/useMovies';

export default function Home() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {data?.map((movie) => (
          <li key={movie.id} className="flex flex-col gap-4 p-4">
            <div className="flex gap-4 items-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={200}
                className="rounded-sm"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-sm opacity-50 font-medium">
                  {movie.overview}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-2">
                <p className="text-sm opacity-50">Released on</p>
                <p className="text-sm font-semibold">{movie.release_date}</p>
              </div>
              {/* <div className="flex flex-col gap-2">
              <p className="text-sm opacity-50">Runtime</p>
              <p className="text-sm font-semibold">{movie.runtime}</p>
            </div> */}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
