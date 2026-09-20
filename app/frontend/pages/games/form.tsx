import type { FormComponentProps } from "@inertiajs/core";
import { Form as InertiaForm } from "@inertiajs/react";

import type { Game } from "@/types";

type GameForm = Omit<Game, "id">;

type FormProps = FormComponentProps<GameForm> & {
  game: Game;
  submitText: string;
};

const Form = ({ game, submitText, ...formProps }: FormProps) => (
  <InertiaForm<GameForm>
    transform={(data) => ({ game: data })}
    className="contents"
    {...formProps}
  >
    {({ errors, processing }) => (
      <>
        <div className="my-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={game.title || ""}
            className="border-ring mt-2 block w-full rounded-md border px-3 py-2 shadow outline-none"
          />
          {errors.title && (
            <div className="text-destructive px-3 py-2 font-medium">
              {errors.title.join(", ")}
            </div>
          )}
        </div>

        <div className="inline">
          <button
            type="submit"
            disabled={processing}
            className="bg-primary inline-block cursor-pointer rounded-lg px-5 py-3 font-medium text-white"
          >
            {submitText}
          </button>
        </div>
      </>
    )}
  </InertiaForm>
);

export default Form;
