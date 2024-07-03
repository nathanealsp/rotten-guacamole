import Image from 'next/image';
import { CalendarDots, FilmSlate } from '@phosphor-icons/react/dist/ssr';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import dayjs from 'dayjs';

import { MovieListResponse } from '@/app/api/types/movies';

const dateFormatter = (date: string) => {
  return dayjs(date).format('MMM DD, YYYY');
};

export default function MovieCard({
  movie,
}: {
  movie: MovieListResponse['results'][0];
}) {
  if (!movie) return null;
  return (
    <Card
      className="overflow-hidden rounded-md shadow-lg"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardContent>
        <div className="grid gap-2 mb-4 pt-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="grid gap-2 mb-4">
          {/* <div className="flex items-center">
            <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
              <FilmSlate size={26} className="text-green-700" />
            </div>
            <span className="text-muted-foreground text-md">{movie.title}</span>
          </div> */}
          <div className="flex items-center">
            <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
              <CalendarDots size={26} className="text-green-700" />
            </div>
            <span className="text-muted-foreground text-md">
              {dateFormatter(movie.release_date)}
            </span>
          </div>
        </div>
        <CardDescription className="min-h-36 max-h-36 text-base overflow-hidden overflow-ellipsis">
          {movie.overview}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
