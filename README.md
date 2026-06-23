# wrangler types new-config reproduction

Minimal reproduction for `wrangler types --x-new-config` failing while other Wrangler commands accept the same experimental TypeScript config flag. in relation to [cloudflare/workers #14396](https://github.com/cloudflare/workers-sdk/issues/14396)

## Reproduce

Install dependencies:

```sh
bun install
```

This succeeds and loads `cloudflare.config.ts`:

```sh
bun run deploy:dry-run
```

This fails:

```sh
bun run cf-types:new-config
```

Expected: `wrangler types --x-new-config` generates `worker-configuration.d.ts` from `cloudflare.config.ts`.

Actual on `wrangler@4.103.0`:

```text
X [ERROR] Unknown arguments: x-new-config, xNewConfig
```

## Environment Used

```text
OS: Windows 11 10.0.26200
Node: 22.22.3
bun: 1.3.14
wrangler: 4.103.0
```
