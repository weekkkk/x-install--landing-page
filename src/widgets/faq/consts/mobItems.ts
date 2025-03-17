export const mobItems = (t: (key: string) => string) => [
  {
    id: 1,
    label: t("faqPage.label"),
    accent: `ASO?`,
    content: t("faqPage.content"),
  },
  {
    id: 2,
    label: t("faqPage.labelMobile2"),
    accent: t("faqPage.accent2"),
    content: t("faqPage.content2"),
  },
  {
    id: 3,
    label: t("faqPage.labelMobile3"),
    accent: `Google UAC?`,
    content: t("faqPage.content3"),
  },
  {
    id: 4,
    label: t("faqPage.labelMobile4"),
    accent: t("faqPage.accentMobile4"),
    content: t("faqPage.content4"),
  },
  {
    id: 5,
    label: t("faqPage.labelMobile5"),
    accent: "",
    content: t("faqPage.content5"),
  },
];
