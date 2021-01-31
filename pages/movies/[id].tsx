import React from 'react';
import { useRouter } from 'next/router';

export default function movie() {
  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  console.dir(router);
  return <div>Movieeeeee {id}</div>;
}
