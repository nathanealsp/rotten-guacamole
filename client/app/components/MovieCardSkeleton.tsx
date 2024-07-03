import Image from "next/image";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} min-h-100 relative w-full min-w-80 animate-pulse overflow-hidden rounded-xl bg-background bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex h-96 items-center justify-center truncate rounded-xl bg-white px-4 py-8"></div>
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex p-2">
        <div className="ml-2 h-24 w-full rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </div>
  );
}

export default function MovieCardSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((movie) => (
        <li key={movie}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
}
