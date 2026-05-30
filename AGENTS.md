# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page React + TypeScript app built with Vite 8. No backend, database, or external services required.

### Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 5173) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Preview prod build | `npm run preview` |

### Notes

- No test framework is configured; there is no `npm test` script.
- The React Compiler (via `babel-plugin-react-compiler`) is enabled; it adds build/dev overhead but requires no special configuration.
- Vite HMR works out of the box; edits to `.tsx`/`.css` files reflect immediately in the browser.
- Use `--host 0.0.0.0` with `npm run dev` when the browser is on a different interface (e.g., `npm run dev -- --host 0.0.0.0`).
