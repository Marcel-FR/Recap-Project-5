import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        {" "}
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/art-pieces">All</Link>
      </li>
      <li>
        <Link href="/">Favourites</Link>
      </li>
    </ul>
  );
}
