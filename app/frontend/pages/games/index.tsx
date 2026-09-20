import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";

import { games as gamesRoutes } from "@/routes";
import type { GamesIndex } from "@/types";

import Game from "./game";

const Index = ({ games }: GamesIndex) => {
  const { flash } = usePage();

  return (
    <>
      <Head title="Games" />
      <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
        {flash.notice && (
          <p className="bg-primary text-secondary mb-5 inline-block rounded-lg px-3 py-2 font-medium">
            {flash.notice}
          </p>
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Games</h1>
          <Link
            href={gamesRoutes.new()}
            className="bg-primary block rounded-lg px-5 py-3 font-medium text-white"
          >
            Add Game
          </Link>
        </div>

        <div className="min-w-full">
          {games.map((game) => (
            <Fragment key={game.id}>
              <Game {...game} />
              <p>
                <Link
                  href={gamesRoutes.show(game.id)}
                  className="bg-muted ml-2 inline-block rounded-lg px-5 py-3 font-medium"
                >
                  Show
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
