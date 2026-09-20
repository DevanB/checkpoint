import { Head, Link } from "@inertiajs/react";

import { games } from "@/routes";
import type { GamesEdit } from "@/types";

import Form from "./form";

const Edit = ({ game }: GamesEdit) => (
  <>
    <Head title={`Edit ${game.title}`} />

    <div className="mx-auto w-full px-8 pt-8 md:w-2/3">
      <h1 className="text-4xl font-bold">Editing game</h1>

      <Form
        game={game}
        action={games.update(game.id)}
        method="patch"
        submitText="Update"
      />

      <Link
        href={games.show(game.id)}
        className="bg-muted ml-2 inline-block rounded-lg px-5 py-3 font-medium"
      >
        More Details
      </Link>
      <Link
        href={games.games()}
        className="bg-muted ml-2 inline-block rounded-lg px-5 py-3 font-medium"
      >
        Back
      </Link>
    </div>
  </>
);

export default Edit;
