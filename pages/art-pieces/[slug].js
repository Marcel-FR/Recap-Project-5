import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log(currentArtPiece);

  // const handleClick = () => {
  //   router.push("/art-piece");
  // };

  return (
    <>
      <ArtPieceDetails currentArtPiece={currentArtPiece} />
    </>
  );
}
