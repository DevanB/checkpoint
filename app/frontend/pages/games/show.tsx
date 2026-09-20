import { Head, Link, usePage } from "@inertiajs/react";

import { games } from "@/routes";
import type { GamesShow } from "@/types";

import Game from "./game";

const Show = ({ game }: GamesShow) => {
  const { flash } = usePage();

  return (
    <>
      <Head title={game.title || ""} />

      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        <div className="mx-auto">
          {flash.notice && (
            <p className="bg-primary text-secondary mb-5 inline-block rounded-lg px-3 py-2 font-medium">
              {flash.notice}
            </p>
          )}

          <h1 className="text-4xl font-bold">{game.title}</h1>

          <Game {...game} />

          <Link
            href={games.edit(game.id)}
            className="bg-muted mt-2 inline-block rounded-lg px-5 py-3 font-medium"
          >
            Edit
          </Link>
          <Link
            href={games.games()}
            className="bg-muted ml-2 inline-block rounded-lg px-5 py-3 font-medium"
          >
            Back
          </Link>
          <div className="ml-2 inline-block">
            <Link
              href={games.destroy(game.id)}
              as="button"
              method="delete"
              className="bg-muted mt-2 rounded-lg px-5 py-3 font-medium"
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
