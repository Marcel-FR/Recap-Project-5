import Image from "next/image";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onClick,
}) {
  <>
    <button onClick={onClick}>Back</button>
    <Image width={80} height={80} src={image} alt={title} />
    <p>{artist}</p>
    <p>{year}</p>
    <p>{genre}</p>
  </>;
}
