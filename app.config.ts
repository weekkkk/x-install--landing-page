export default defineAppConfig({
  ui: {
    strategy: "override",
    button: {
      rounded: "rounded-full",
      size: {
        sm: "text-[1rem]",
        md: "text-[1rem]",
      },
      padding: {
        sm: "py-[1rem] px-[2.5rem]",
        md: "py-[1rem] px-[3.25rem]",
      },
      color: {
        primary: {
          outline:
            "hover:dark:bg-white hover:dark:text-black border dark:disabled:bg-[#383838] dark:disabled:text-[#8A8A8A] dark:disabled:border-none",
          solid:
            "shadow-sm dark:text-black dark:bg-gradient-to-r dark:from-turquoise-100 dark:to-green hover:dark:to-turquoise-0 dark:disabled:to-[#383838] dark:disabled:from-[#383838] dark:disabled:text-[#8A8A8A]",
        },
      },
    },
    tabs: {
      list: {
        base: "top-0, bottom-0, h-auto",
        padding: "p-0",
        rounded: "rounded-[2.5rem]",
        background: "dark:bg-[#151515]",
        marker: {
          rounded: "rounded-[2.5rem]",
          background:
            "dark:bg-gradient-to-r dark:from-turquoise-100 dark:to-green",
        },
        tab: {
          active: "dark:text-black",
          inactive: "dark:text-white",
          size: "text-[1.25rem]",
        },
      },
    },
    input: {
      size: {
        sm: "text-[1.5rem]",
      },
      padding: {
        sm: "p-10",
      },
      color: {
        white: {
          outline:
            "dark:bg-[#101010] dark:text-[#8A8A8A] dark:placeholder:text-[#8A8A8A] focus:outline-none focus:ring-0 rounded-[2rem]",
        },
      },
    },
  },
});
