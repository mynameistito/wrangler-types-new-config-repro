import { bindings, defineWorker } from "wrangler/experimental-config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineWorker({
  name: "wrangler-types-new-config-repro",
  entrypoint,
  compatibilityDate: "2026-06-22",
  env: {
    EXAMPLE_TEXT: bindings.text("hello from cloudflare.config.ts"),
  },
});
