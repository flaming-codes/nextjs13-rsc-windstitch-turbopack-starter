# Interactive 3D Portfolio

This repo is an ongoing WIP to explore new ideas and ways for implementing interactive 3D web models (Three.js, WebGL, etc).

## Stack

- Next.js 13 w/ `/app` folder structure
- Tailwind
- Turbopack (for both Next.js and Tailwind)
- windstitch (styled alternative)

### Next.js 13

Next.js is used **with `/app` folder structure**. This is a new feature in Next.js 13 that allows for a more modular approach to the project. It should be easier to manage and maintain due to colocation of relevant components as well as `layout.tsx` and `head.tsx` single-purpose components.

### Styling

This project uses vanilla **Tailwind** for implementing the design system.

**Styled Components** are currently not fully compatible with Next.js 13 w/RSC, as they require a context to mount. RSC doesn't support context as well as `useState`, therefore `windstitch` is used as a styled alternative. It offers a styled-like API.

### Compiling

**Turbopack** is used to compile both Next.js and Tailwind. It's a fork of `esbuild` that adds support for `postcss` and `tailwindcss`. It's a lot faster than `next build` and `next export`.

The relevant changes are for one in the `package.json` file.

```json
"dev": "concurrently \"next dev\" \"tailwindcss --input ./app/globals.input.css --output ./app/globals.css --watch\"",
"build": "tailwindcss ./app/globals.input.css --output ./app/globals.css && next build",
```

The other change is in the `next.config.js` file.

```js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...
};
```

## Useful Links

- [Vercel app playground](https://github.com/vercel/app-playground/tree/main)
