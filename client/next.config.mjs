/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    // declare here all your variables
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
    POSTER_PATH: process.env.NEXT_PUBLIC_POSTER_PATH,
    BACKDROP_PATH: process.env.NEXT_PUBLIC_BACKDROP_PATH,
  },
};

export default nextConfig;
