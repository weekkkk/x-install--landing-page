import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        turquoise: {
          100: "#19F2C8",
          0: "#95FFEA",
        },
        green: "#6AE15F",
        violet: "#8706D6",
      },
      fontSize: {
        base: ["1rem", "1.2"],
        lg: ["1.25rem", "1.2"],
        xl: ["1.5rem", "1.2"],
        "2xl": ["2.5rem", "1.2"],
        "3xl": ["3rem", "4rem"],
        "4xl": ["3.5rem", "1.2"],
        "5xl": ["4rem", "4.75rem"],
      },
    },
  },
};
