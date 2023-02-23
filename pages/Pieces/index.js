import useSWR from "swr";
import ArtPieces from "../../components/ArtPieces";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(pieces);
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}

// import useSWR from "swr";
// import Image from "next/image";

// function fetcher(url) {
//   return fetch(url).then((res) => res.json());
// }

// export default function ArtPiece() {
//   const { data, error } = useSWR(
//     "https://example-apis.vercel.app/api/art",
//     fetcher
//   );

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   // const randomIndex = Math.floor(Math.random() * data.length);
//   const artPiece = data;

//   return (
//     <>
//       <h2>{artPiece.name}</h2>
//       <Image
//         width="80"
//         height="80"
//         src={artPiece.imageSource}
//         alt={artPiece.name}
//       />
//       <p>Artist: {artPiece.artist}</p>
//       <p>Year: {artPiece.year}</p>
//       <p>Genre: {artPiece.genre}</p>
//       {/* <p>Colors: {artPiece.colors.join(", ")}</p> */}
//     </>
//   );
// }
