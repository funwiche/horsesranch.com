import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        info: "#007AFF",
        error: "#D9000C",
        success: "#35C759",
        warning: "#FFCC00",
        separator: "#C6C6C8",
        base: "#F2F2F7",
        primary: "#1C1C1E",
        secondary: "#FFFFFF",
        tertiary: "#EFEFF4",
        hover: "#0000001A",
        link: { default: "#007AFF", visited: "#800080", hover: "#005FCC" },
      },
      textColor: {
        default: "#3C3C43",
        medium: "#3C3C4399",
        disabled: "#3C3C434D",
      },
      fontSize: {
        display: ["3rem", "3.6rem"],
        title: ["1.5rem", "1.875rem"],
        subtitle: ["1.125rem", "1.6875rem"],
        body: ["0.875rem", "1.175rem"],
        caption: ["0.6875rem", "1rem"],
        overline: ["0.625rem", "1rem"],
      },
    },
    screens: {
      xs: "380px",
      sm: "600px",
      md: "968px",
      lg: "1280px",
      xl: "1920px",
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};
