import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(pieces);
  return (
      <>
      <ArtPieces pieces={pieces} />
      </>
  )
}
