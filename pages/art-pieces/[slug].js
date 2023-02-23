import Link from "next/link";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log(currentArtPiece);

  const handleClick = () => {
    router.push("/art-piece");
  };

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        onClick={handleClick}
      />
    </>
  );
}
