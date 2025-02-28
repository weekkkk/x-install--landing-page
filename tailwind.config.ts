import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  // content: ["./**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        turquoise: {
          100: "#19F2C8",
          0: "#95FFEA",
        },
        green: "#6AE15F",
      },
    },
  },
};
