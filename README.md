# @voluspalabs/lib

A collection of high-quality utility functions and React hooks for building modern web applications.

## Features

- **React Hooks:** Collection of useful React hooks for common use cases
- **Tailwind Utils:** Utilities for handling Tailwind CSS class names
- **TypeScript Support:** Written in TypeScript for type safety and enhanced developer experience

## Installation

Install the package via npm:

```zsh
npm install @voluspalabs/lib
```

Or via Bun:

```zsh
bun add @voluspalabs/lib
```

## Usage

Import the component you need from the package. For example, to use the button component:

```tsx
import { cn } from '@voluspalabs/lib';

const className = cn(
  'px-4 py-2',
  { 'bg-blue-500': isPrimary },
  'rounded'
);
```

## Development

To work on this project locally, follow these steps:

1. Clone the repo: `git clone https://github.com/voluspalabs/lib.git`
2. Install dependencies: `bun install`

For building the package, run: `bun run build`

The built files will be output to the dist directory as defined in package.json.

## License

This project is licensed under the BSL-1.0 License. See the LICENSE file for more details.
