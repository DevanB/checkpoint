/* oxlint-disable prefer-await-to-then */
/* oxlint-disable prefer-await-to-callbacks */
/* oxlint-disable prefer-query-selector */
/* oxlint-disable github/no-then */
import { createInertiaApp } from "@inertiajs/react";

void createInertiaApp({
  defaults: {
    form: {
      forceIndicesArrayFormatInFormData: false,
      withAllErrors: true,
    },
    visitOptions: () => ({ queryStringArrayFormat: "brackets" }),
  },
  pages: "../pages",
  strictMode: true,
  title: (title) => `${title} :: Checkpoint`,
}).catch((error) => {
  // This ensures this entrypoint is only loaded on Inertia pages
  // by checking for the presence of the root element (#app by default).
  // Feel free to remove this `catch` if you don't need it.
  if (document.getElementById("app")) {
    throw error;
  } else {
    console.error(
      "Missing root element.\n\n" +
        "If you see this error, it probably means you loaded Inertia.js on non-Inertia pages.\n" +
        'Consider moving <%= vite_typescript_tag "inertia.tsx" %> to the Inertia-specific layout instead.'
    );
  }
});
