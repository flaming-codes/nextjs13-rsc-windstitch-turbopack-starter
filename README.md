# nextjs13-rsc-windstitch-turbopack-starter

Template to get you started with Next.js 13, RSC (React Server Components), Windstitch (Tailwind CSS in React), and Turbopack. This template will be updated as new features for Next.js 13 are released.

## Features of this template

- 🚀 Next.js 13 with /app directory for improved organization
- 🔄 Revalidation of React components in RSC with revalidate property
- 🎨 Windstitch for Tailwind CSS in React with styled-like API and polymorphic components
- 💻 Custom VS Code settings for improved DX with Windstitch
- ⚡️ Turbopack for extremely fast builds
- 🔢 TypeScript 5 for performance improvements and new features
- 🎉 Playful animation powered by Pts.js library (optional)

### tl;dr

This is a template to get you started with Next.js 13, RSC (React Server Components), Windstitch (Tailwind CSS in React), and Turbopack. It uses colaction to organize your code (see /modules) and uses as much new features from Next.js 13 as possible.

### Next.js 13 with /app

Next.js 13 introduces a new /app directory that is intended to contain all routes as well as meta data, layout definitions, and other colocated files. This is a great way to organize your application and is a big improvement over the previous approach.

### Revalidation of React Components

With Next.js 13, you can now revalidate React (Server) components by simply adding a revalidate property as 2nd argument to the fetch function inside the RSC. Learn more.

#### Windstitch for Tailwind

Windstitch is a library that allows you to use Tailwind classes in your React components. It replaces the need for a CSS-in-JS library like Emotion or Styled Components and is compatible with RSC. Windstitch has a styled-like API and supports polymorphic components.

### Windstitch & VS Code

To improve the DX of Windstitch, this template also includes a custom VS Code settings.json file. This extension allows you to use Tailwind classes in your CSS-in-JS files and provides autocompletion for them. It is not perfect yet, but it is still a great improvement over the default experience.

### Turbopack

Turbopack is a build tool developed by Vercel that is written in Rust. It replaces the need for a bundler like Webpack or Parcel and is extremely fast. You should therefore notice a significant improvement in your build times.

### TypeScript 5

This template also uses TypeScript 5. TypeScript 5 introduces performance improvements, new features (like the satisfies-operator), and bug fixes.

### Demo by Pts.js

Pts.js is a library for creative coding in JavaScript and powers the playful animation in the hero section of this page. Feel free to remove it if you do not need it. But I highly recommend you to check it out.
