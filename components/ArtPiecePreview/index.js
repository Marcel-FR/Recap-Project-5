import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image width="80" height="80" src={image} alt={title} />
      <p>
        {title} by {artist}
      </p>
    </div>
  );
}
