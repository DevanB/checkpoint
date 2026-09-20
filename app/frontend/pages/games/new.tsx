import { Head, Link } from "@inertiajs/react";

import { games } from "@/routes";
import type { GamesNew } from "@/types";

import Form from "./form";

const New = ({ game }: GamesNew) => (
  <>
    <Head title="Add Game" />

    <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
      <h1 className="text-4xl font-bold">Add Game</h1>

      <Form
        game={game}
        method="post"
        action={games.create()}
        submitText="Add Game"
      />

      <Link
        href={games.games()}
        className="bg-muted ml-2 inline-block rounded-lg px-5 py-3 font-medium"
      >
        Back
      </Link>
    </div>
  </>
);

export default New;
