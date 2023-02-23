import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        {" "}
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Pieces">All</Link>
      </li>
      <li>
        <Link href="/Pieces">Favourites</Link>
      </li>
    </ul>
  );
}
