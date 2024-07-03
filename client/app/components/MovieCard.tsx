import Image from 'next/image';
import { CalendarDots, FilmSlate } from '@phosphor-icons/react/dist/ssr';

import { MovieListResponse } from '@/app/api/types/movies';

export default function MovieCard({
  movie,
}: {
  movie: MovieListResponse['results'][0];
}) {
  if (!movie) return null;
  return (
    <div className="w-full max-w-80 mx-auto    bg-background rounded-lg shadow-lg shadow-green-900 overflow-hidden">
      <div className="relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 space-y-2 font-medium">
        <div className="flex items-center">
          <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
            <FilmSlate size={26} className="text-green-700" />
          </div>
          <span className="text-muted-foreground ">{movie.title}</span>
        </div>
        <div className="flex items-center">
          <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
            <CalendarDots size={26} className="text-green-700" />
          </div>
          <span className="text-muted-foreground">{movie.release_date}</span>
        </div>
        <p className="text-muted-foreground text-ellipsis overflow-hidden h-24">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
