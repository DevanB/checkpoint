import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import react from "ultracite/oxlint/react";
import vitest from "ultracite/oxlint/vitest";

const jsPlugins = selectJsPlugins(["react-doctor", "sonarjs", "github"]);

export default defineConfig({
  extends: [core, vitest, react, antiSlop, jsPlugins],
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    ".agents/**",
    "AGENTS.md",
    "app/frontend/components/ui",
  ],
  jsPlugins: [...(jsPlugins.jsPlugins ?? []), "oxlint-plugin-complexity"],
  overrides: [
    {
      files: ["app/frontend/**"],
      rules: {
        "import/no-relative-parent-imports": "error",
      },
    },
  ],
  rules: {
    "complexity/complexity": ["error", { cognitive: 15 }],
  },
  settings: jsPluginSettings,
});
