# Math Equation Visualizer

An interactive web app to explore and visualize mathematical equations through stunning, animated graphics. Built with Next.js, React, p5.js, and Tailwind CSS, this project lets you watch equations come to life and experiment with mathematical beauty.

## Features

- 🌀 **Interactive Visualizations:** Browse a grid of animated math equations, each with a live preview.
- 🔍 **Modal View:** Click any visualization to open a larger, interactive modal with the formula and animation.
- 🎨 **Modern UI:** Clean, responsive design using Tailwind CSS and [shadcn/ui](https://ui.shadcn.com/) components.
- ➕ **Easily Extensible:** Add your own equations and visualizations by editing a single file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn/bun)

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

- `app/` – Main Next.js app, entry point (`page.tsx`), layout, and global styles.
- `components/` – UI and visualization components:
  - `hero.tsx` – Landing section.
  - `visualizer-grid.tsx` – Grid of equation previews.
  - `visualization-modal.tsx` – Modal for interactive view.
  - `mini-p5-wrapper.tsx` & `p5-wrapper.tsx` – p5.js canvas wrappers.
- `lib/equations.ts` – All equation definitions and their p5.js sketches.
- `lib/utils.ts` – Utility functions (e.g., class name merging).
- `public/` – Static assets.

## Adding New Visualizations

To add a new equation:

1. Open `lib/equations.ts`.
2. Add a new object to the `equations` array with the following fields:
   - `id`: Unique string ID
   - `title`: Display name
   - `description`: Short explanation
   - `formula`: Math formula as a string
   - `sketch`: Main p5.js sketch function
   - `miniSketch`: Smaller preview sketch function

Example:

```ts
{
  id: "my-equation",
  title: "My Equation",
  description: "A cool new visualization",
  formula: "x = ...",
  sketch: (p) => { /* p5.js code */ },
  miniSketch: (p) => { /* p5.js code */ },
}
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [p5.js](https://p5js.org/) (for creative coding)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (UI components)
- [TypeScript](https://www.typescriptlang.org/)

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Run linter

## Credits & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [p5.js Reference](https://p5js.org/reference/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)

## License

[MIT](LICENSE) (or specify your license here)
