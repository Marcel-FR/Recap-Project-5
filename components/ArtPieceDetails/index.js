import Image from "next/image";

export default function ArtPieceDetails({ currentArtPiece }) {
  console.log(currentArtPiece);
  return (
    <>
      <Image
        width={80}
        height={80}
        src={currentArtPiece.imageSource}
        alt={currentArtPiece.name}
      />
      <p>{currentArtPiece.artist}ARTIST</p>
      <p>{currentArtPiece.year}JAHR</p>
      <p>{currentArtPiece.genre}GENRE</p>
    </>
  );
}
