# AstraUI-Tailwind

AstraUI-Tailwind is a UI library developed using Tailwind CSS. With AstraUI-Tailwind, you can develop applications quickly and efficiently using pre-designed and customizable components.

## Getting Started

Follow the steps below to start using AstraUI-Tailwind:

### Installation

You can install AstraUI-Tailwind via npm:

```bash
npm i astraui-tailwind
```

You also need to install Tailwind CSS to use this UI kit. If Tailwind CSS is not installed, you can install it with the following command:

official site : [tailwindcss](https://tailwindcss.com/)

```bash
npm install tailwindcss
```

### Tailwind CSS Configuration

To use Tailwind CSS with AstraUI-Tailwind, you need to make some settings in the `tailwind.config.js` file. The relevant settings are as follows:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/astraui-tailwind/dist/**/*.{js,ts,jsx,tsx,mdx}", // Line where astraui-tailwind components are included
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
```

These settings ensure that Tailwind CSS properly recognizes and renders AstraUI-Tailwind components.

## License

AstraUI-Tailwind is released under the MIT license. For details, see the [License](./LICENSE) file.
