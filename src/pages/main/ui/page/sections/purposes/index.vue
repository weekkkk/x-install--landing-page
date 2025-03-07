<script setup lang="ts">
import type { keyFigureList } from "~/src/shared/ui/key-figures/types";

/**Ключевые показатели */
const keyFiguresList: keyFigureList[] = [
  {
    Id: 1,
    Title: "20K+",
    Paragraph: "Загрузок В День",
  },
  {
    Id: 2,
    Title: "170+",
    Paragraph: "Стран",
  },
  {
    Id: 3,
    Title: "2,5M+",
    Paragraph: "Активных Пользователей",
  },
  {
    Id: 4,
    Title: "700+",
    Paragraph: "Клиентов",
  },
];
</script>
<template>
  <div class="max-md:flex max-md:justify-center">
    <div class="text-center max-md:w-[17.95rem]">
      <div
        class="text-4xl leading-[134%] font-bold max-md:text-base max-md:leading-[134%]"
      >
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
          целевого действия
        </span>
        : покупке, регистрации, переходу на сайт
      </div>
      <div
        class="mt-[5.5rem] max-md:mt-10 flex gap-[11.4rem] justify-between ml-[4.7rem] max-md:mx-0 mr-[5.7rem] max-md:flex-col max-md:justify-center max-md:gap-10"
      >
        <UiKeyFigures
          v-for="keyFigure in keyFiguresList"
          :key="keyFigure.Id"
          :Title="keyFigure.Title"
          :Paragraph="keyFigure.Paragraph"
        />
      </div>
    </div>
  </div>
</template>
