export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <button onClick={onBackClick}> Back </button>
      <Image src={image} alt={title} />
      <p> {title}</p>
      <p> {artist}</p>
      <p> {year}</p>
      <p> {genre}</p>
    </>
  );
}
