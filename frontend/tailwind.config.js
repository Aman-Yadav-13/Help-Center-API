/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ffffff', // Set the primary background color to white
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff", // Setting the primary color to white
          "base-100": "#ffffff", // Setting the base background color to white
          // Add other color customizations if needed
        },
      },
    ],
  },
};

