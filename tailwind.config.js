export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.375rem",
        "5xl": "3rem",
        "6xl": "3.375rem",
        "7xl": "64px",
        "8xl": "96px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "WKS-Primary": "#9C3233",
        "WKS/Darkest": "#101828",
        "WKS/Medium": "#F0E0E0",
      },
    },
  },
  plugins: [],
};
