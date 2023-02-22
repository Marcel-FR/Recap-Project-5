export default function ArtPiecePreview({ image, title, artist }) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>"{title}" by {artist}</p>
        </div>
    )
}