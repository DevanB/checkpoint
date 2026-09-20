import type { Game as GameType } from "@/types";

const Game = ({ title, coverImageUrl, releaseYear }: GameType) => (
  <div>
    <p className="my-5">
      <strong className="mb-1 inline font-medium">Title: </strong>
      {title?.toString()}
    </p>
    {coverImageUrl && (
      <p className="my-5">
        <img src={coverImageUrl?.toString()} alt="" />
      </p>
    )}
    {releaseYear && (
      <p className="my-5">
        <strong className="mb-1 inline font-medium">Released: </strong>
        {releaseYear?.toString()}
      </p>
    )}
  </div>
);

export default Game;
