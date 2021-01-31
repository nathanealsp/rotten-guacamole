import React from 'react';
import { useRouter } from 'next/router';

// import

export default function movie() {
  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  return <div>Movieeeeee {id}</div>;
}
