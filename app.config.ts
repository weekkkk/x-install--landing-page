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
            "hover:dark:bg-white hover:dark:text-black border dark:disabled:bg-graphite dark:disabled:text-mediumGray dark:disabled:border-none",
          solid:
            "shadow-sm dark:text-black dark:bg-gradient-to-r dark:from-turquoise-100 dark:to-green hover:dark:to-turquoise-0 dark:disabled:to-graphite dark:disabled:from-graphite dark:disabled:text-mediumGray",
        },
      },
    },
    tabs: {
      list: {
        base: "top-0, bottom-0, h-auto",
        padding: "p-0",
        rounded: "rounded-[2.5rem]",
        background: "dark:bg-сharcoal",
        marker: {
          rounded: "rounded-[2.5rem]",
          background:
            "dark:bg-gradient-to-r dark:from-turquoise-100 dark:to-green",
        },
        tab: {
          height: "h-[3.2rem]",
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
            "dark:bg-jetBlack dark:text-mediumGray dark:placeholder:text-mediumGray focus:outline-none focus:ring-0 rounded-[2rem]",
        },
      },
    },
    textarea: {
      size: {
        sm: "text-[1.5rem]",
      },
      padding: {
        sm: "p-10",
      },
      color: {
        white: {
          outline:
            "dark:bg-jetBlack dark:text-mediumGray dark:placeholder:text-mediumGray focus:outline-none focus:ring-0 rounded-[2rem]",
        },
      },
    },
  },
});
