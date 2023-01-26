import Link from "next/link";
import React from "react";

type DetailLinkProps = {
  animeId: string;
  animeTitle: string;
  episodeNumber: number;
};

const DetailLinks = ({
  animeId,
  animeTitle,
  episodeNumber,
}: DetailLinkProps): JSX.Element => (
  <div className="hidden md:flex text-white text-xs gap-2 items-center mb-4 w-full text-left">
    <Link href="/">Home</Link>
    <span className={`w-1 h-1 rounded-full inline-block bg-white`}></span>
    <Link href={`/anime/${animeId}`}>
      <span className="normal-case">{animeTitle}</span>
    </Link>
    <span className={`w-1 h-1 rounded-full inline-block bg-white`}></span>
    <span>Episode {episodeNumber}</span>
  </div>
);

export default DetailLinks;
