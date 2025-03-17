export default defineAppConfig({
  ui: {
    strategy: "override",
    button: {
      rounded: "rounded-full",
      size: {
        sm: "text-base",
        md: "text-base",
      },
      padding: {
        sm: "py-4 px-10",
        md: "py-4 px-[3.25rem]",
      },
      color: {
        primary: {
          outline:
            "hover:dark:bg-white hover:dark:text-black border dark:disabled:bg-graphite dark:disabled:text-mediumGray dark:disabled:border-none leading-[1.1935rem]",
          solid:
            "shadow-sm dark:text-black dark:bg-gradient-to-r dark:from-turquoise-100 dark:to-green hover:dark:to-turquoise-0 dark:disabled:to-graphite dark:disabled:from-graphite dark:disabled:text-mediumGray leading-[1.1935rem]",
        },
      },
    },
    tabs: {
      list: {
        base: "relative ,top-0, bottom-0, h-auto",
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
          size: "text-lg",
        },
      },
    },
    input: {
      size: {
        sm: "text-xl",
      },
      padding: {
        sm: "p-10",
      },
      color: {
        white: {
          outline:
            "dark:bg-jetBlack dark:text-mediumGray dark:placeholder:text-mediumGray focus:outline-none focus:ring-0 rounded-[2rem] leading-[1.79rem]",
        },
      },
    },
    textarea: {
      size: {
        sm: "text-xl",
      },
      padding: {
        sm: "p-10",
      },
      color: {
        white: {
          outline:
            "dark:bg-jetBlack dark:text-mediumGray dark:placeholder:text-mediumGray focus:outline-none focus:ring-0 rounded-[2rem] leading-[1.79rem]",
        },
      },
    },
    accordion: {
      wrapper: "w-full flex flex-col gap-y-4",
      container:
        "bg-jetBlack pl-10 pr-10 pb-[3.2rem] pt-[3.2rem] rounded-[2.5rem] min-h-[10rem] max-md:min-h-20 max-md:pl-6 max-md:pr-6 max-md:py-0 flex flex-col justify-center max-md:justify-start",
      item: {
        base: "",
        size: "text-xl max-md:text-base",
        color: "text-mediumGray leading-[2rem] whitespace-pre-line",
        padding: "pt-3 max-md:mb-0 max-md:pb-[2.95rem]",
      },
      content: "text-mediumGray text-xl",
      defaultOpen: false,
      multiple: true,
      default: {
        class: "w-full h-full p-0",
        openIcon: "i-custom-arrow-down",
      },
      transition: {
        enterActiveClass:
          "overflow-hidden transition-[height,opacity] ease-out opacity-100 duration-500",
        leaveActiveClass:
          "overflow-hidden transition-[height,opacity] ease-out opacity-0 duration-500",
      },
    },
  },
});
