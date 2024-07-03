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

export default function MovieCard({ movie }: { movie: MovieListResponse['results'][0] }) {
  if (!movie) return null;
  return (
    <Card className="overflow-hidden rounded-md shadow-lg" x-chunk="dashboard-07-chunk-4">
      <CardContent>
        <div className="mb-4 grid gap-2 pt-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={100}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="mb-4 grid gap-2">
          {/* <div className="flex items-center">
            <div className="bg-muted pr-2 rounded-md flex items-center justify-center">
              <FilmSlate size={26} className="text-green-700" />
            </div>
            <span className="text-muted-foreground text-md">{movie.title}</span>
          </div> */}
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-md bg-muted pr-2">
              <CalendarDots size={26} className="text-green-700" />
            </div>
            <span className="text-md text-muted-foreground">
              {dateFormatter(movie.release_date)}
            </span>
          </div>
        </div>
        <CardDescription className="max-h-36 min-h-36 overflow-hidden overflow-ellipsis text-base">
          {movie.overview}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
