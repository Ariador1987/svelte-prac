/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts}",
        "./src/*.{svelte,js,ts}",
    ],
    plugins: [],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    darkMode: "media", // or 'media' or 'class'
};
