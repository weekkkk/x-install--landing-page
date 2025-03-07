<script setup lang="ts">
import type { UiPriceCardProps } from "./types";
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
const isDesktop = useMediaQuery("(min-width: 769px)");

const props = defineProps<UiPriceCardProps>();
const textParts = computed(() => {
  const title = isMobile ? props.md.service : props.service;
  const accent = isMobile ? props.md.serviceAccent : props.serviceAccent;

  if (!title.includes(accent)) {
    return { before: title, after: "" }; // Если акцентное слово отсутствует в заголовке
  }

  const [before, after] = title.split(accent);
  return { before, after, accent };
});
</script>

<template>
  <div
    class="max-md:w-[17.65rem] max-md:h-[24.5rem] max-md:p-6 max-md:flex-col w-[91rem] h-[20rem] flex justify-between bg-jetBlack p-10 rounded-[50px] gap-x-4"
  >
    <div class="max-md:w-full w-[45%] flex flex-col gap-y-3">
      <div
        class="max-md:text-[1.25rem] max-md:leading-[134%] text-4xl font-bold w-full leading-[3.59rem]"
      >
        <span class="whitespace-pre-wrap inline"
          ><span v-if="textParts.before">{{ textParts.before }}</span
          ><span
            class="bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
            v-for="(word, index) in textParts.accent?.match(/(\S+|\s|\n)/g) ||
            []"
            :key="index"
            ><span> </span>{{ word }}</span
          ><span v-if="textParts.after">{{ textParts.after }}</span></span
        >
      </div>
      <p
        class="max-md:text-base text-xl text-mediumGray leading-[2.01rem] whitespace-break-spaces"
      >
        {{ isMobile ? md.serviceDescription : serviceDescription }}
      </p>
    </div>
    <div class="max-md:w-full w-[35%] flex flex-col justify-center">
      <ul
        class="max-md:text-base flex flex-col gap-y-6 max-md:gap-y-4 text-xl font-semibold"
      >
        <li
          v-for="(item, index) in guarantees"
          :key="index"
          class="flex items-center space-x-3"
        >
          <div
            class="w-[1.05rem] h-[1.05rem] rounded-full bg-gradient-to-r from-turquoise-100 to-green inline-block flex-shrink-0"
          ></div>
          <span class="max-md:leading-[100%] leading-[1.79rem]">{{
            item
          }}</span>
        </li>
      </ul>
    </div>
    <div
      class="max-md:w-full max-md:justify-start w-[19%] flex justify-end items-center gap-x-3"
    >
      <p
        class="text-mediumGray text-xl max-md:text-base"
        v-if="price && !isUnitPrice"
      >
        от
      </p>
      <h3
        class="max-md:text-xl text-5xl font-bold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
        v-if="price"
      >
        ${{ price }}
      </h3>
      <p
        v-if="price && isUnitPrice"
        class="text-xl text-mediumGray max-md:text-base"
      >
        /шт
      </p>
      <h3
        class="text-[2rem] max-md:text-base text-right leading-[2.386rem] font-semibold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
        v-if="!price"
      >
        Индивидуальная стоимость
      </h3>
    </div>
  </div>
</template>
