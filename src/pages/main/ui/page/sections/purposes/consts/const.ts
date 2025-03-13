import type { KeyFigureList } from "../types";

/**Ключевые показатели */
export const keyFiguresList = (t: (key: string) => string): KeyFigureList[] => [
  {
    id: 1,
    title: "20K+",
    paragraph: t("purposesPage.downloadsDay"),
  },
  {
    id: 2,
    title: "170+",
    paragraph: t("purposesPage.countries"),
  },
  {
    id: 3,
    title: "2,5M+",
    paragraph: t("purposesPage.activeUsers"),
  },
  {
    id: 4,
    title: "700+",
    paragraph: t("purposesPage.clients"),
  },
];
