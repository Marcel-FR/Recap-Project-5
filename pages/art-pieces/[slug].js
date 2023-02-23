import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage=() => {
    const router= useRouter();
    const { slug } = router.query;
    const handleBackClick= ()=>{
        router.back();
    }
    return(
        <>
        <ArtPieceDetails image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        onBackClick={handleBackClick} />
        </>

    );
}
