import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function LinkIcon({ src, alt }: Props) {
  return (
    <button>
      <Image src={src} alt={alt} height="64" width="64" objectFit="cover" />
    </button>
  );
}
