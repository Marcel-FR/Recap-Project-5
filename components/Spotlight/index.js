import Image from "next/image";

// function getRandomInt({ pieces }) {
//   console.log(randomIndex);
//   return pieces[randomIndex];
// }

export default function Spotlight({ pieces }) {
  const randomIndex = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(randomIndex);
  return (
    <div>
    <Image width="80" height="80" src={randomIndex.imageSource} alt={randomIndex.title} />
    <p>
      {randomIndex.name} by {randomIndex.artist}
    </p>
  </div>
  );
}
