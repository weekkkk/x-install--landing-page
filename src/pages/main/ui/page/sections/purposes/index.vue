<script setup lang="ts">
import type { KeyFigures } from "./types";

/**Ключевые показатели */
const keyFiguresList: KeyFigures[] = [
  {
    Id: Date.now(),
    Title: "20K+",
    Paragraph: "Загрузок В День",
  },
  {
    Id: Date.now(),
    Title: "170+",
    Paragraph: "Стран",
  },
  {
    Id: Date.now(),
    Title: "2,5M+",
    Paragraph: "Активных Пользователей",
  },
  {
    Id: Date.now(),
    Title: "700+",
    Paragraph: "Клиентов",
  },
];
</script>
<template>
  <div class="text-center">
    <div class="text-4xl leading-[134%] font-bold">
      Наша цель —
      <span
        class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        привлечь внимание
      </span>
      потенциальных клиентов через их мобильные устройства и побудить
      их к совершению
      <span
        class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        целевого действия</span
      >: покупке, регистрации, переходу на сайт
    </div>
    <div
      class="mt-[5.5rem] flex gap-[11.4rem] justify-between ml-[4.7rem] mr-[5.7rem]"
    >
      <KeyFiguresWidget
        v-for="keyFigure in keyFiguresList"
        :key="keyFigure.Id"
        :Title="keyFigure.Title"
        :Paragraph="keyFigure.Paragraph"
      />
    </div>
  </div>
</template>
