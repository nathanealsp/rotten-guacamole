import Image from 'next/image';

import { CalendarDots, FilmSlate } from '@phosphor-icons/react';

export default function MovieCard({ movie }) {
  return (
    <div className="w-full max-w-80 mx-auto bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/100 to-transparent p-4">
          <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
        </div>
      </div>
      <div className="p-4 space-y-2 font-medium">
        <div className="flex items-center">
          <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
            <FilmSlate size={26} className="text-muted-foreground" />
          </div>
          <span className="text-muted-foreground ">{movie.title}</span>
        </div>
        <div className="flex items-center">
          <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
            <CalendarDots className="w-6 h-6 text-muted-foreground" />
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
