import ArtPiece from "../../pages/Pieces";
import Image from "next/image";
import HomePage from "../../pages/Pieces";

function getRandomInt({ pieces }) {
  const randomIndex = Math.floor(Math.random() * 11);
  console.log(randomIndex);
  return pieces[randomIndex];
}

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image width={80} height={80} src={image} alt={image} />
    </>
  );
}
