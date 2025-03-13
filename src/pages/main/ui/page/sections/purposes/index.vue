<script setup lang="ts">
import { keyFiguresList } from "./consts";
const { t } = useI18n();
</script>
<template>
  <div class="max-md:flex max-md:justify-center">
    <div class="text-center max-md:w-[17.95rem]">
      <div
        class="text-4xl leading-[134%] font-bold max-md:text-base max-md:leading-[134%]"
      >
        {{ $t("purposesPage.urGoal") }}
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          {{ $t("purposesPage.attention") }}
        </span>
        {{ $t("purposesPage.clientEngagement") }}
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          {{ $t("purposesPage.targetedAction") }}
        </span>
        {{ $t("purposesPage.userActionTypes") }}
      </div>
      <div
        class="mt-[5.5rem] max-md:mt-10 flex gap-[11.4rem] justify-between ml-[4.7rem] max-md:mx-0 mr-[5.7rem] max-md:flex-col max-md:justify-center max-md:gap-10"
      >
        <UiKeyFigures
          v-for="keyFigure in keyFiguresList(t)"
          :key="keyFigure.id"
          :title="keyFigure.title"
          :paragraph="keyFigure.paragraph"
        />
      </div>
    </div>
  </div>
</template>
