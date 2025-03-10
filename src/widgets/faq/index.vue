<script setup lang="ts">
import { deskItems } from "./consts/deskItems";
import { mobItems } from "./consts/mobItems";
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 768px)");
const items = computed(() => {
  return isLargeScreen.value ? deskItems : mobItems;
});
</script>
<template>
  <section class="mt-[16.5rem]">
    <div class="flex flex-col items-center">
      <div class="relative w-full flex flex-col items-center">
        <h2
          class="max-md:text-[1.75rem] max-md:leading-[1.2] text-6xl font-bold text-transparent bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text mb-20 max-md:mb-10"
        >
          FAQ
        </h2>
        <UiBlurCircle
          v-if="isLargeScreen"
          :color="'bg-turquoise-100'"
          class="absolute left-[39.1rem] bottom-[2.5rem] !w-[11.15rem] !h-[11.15rem] !blur-[11rem]"
        />
        <NuxtImg
          v-if="isLargeScreen"
          src="/images/faq-grid.webp"
          alt="gridBackground"
          class="absolute w-[28rem] h-[28rem] max-w-none -top-[12.15rem] left-[30.65rem] -z-20"
        />
        <UiBlurCircle
          :color="'bg-turquoise-100'"
          class="absolute left-[13.45rem] bottom-[3.55rem] !w-[12.65rem] !h-[12.65rem] max-md:-left-[0.25rem] max-md:bottom-[0.585rem] max-md:!w-[4.56rem] max-md:!blur-[5.5rem] max-md:!h-[4.56rem] !blur-[17rem]"
        />
        <UiBlurCircle
          :color="'bg-turquoise-100'"
          class="absolute -right-[5.85rem] bottom-[2.7rem] !w-[12.65rem] !h-[12.65rem] max-md:!w-[5.55rem] max-md:!h-[5.55rem] max-md:bottom-[0.39rem] max-md:-right-[1.85rem] max-md:!blur-[5.25rem] !blur-[15rem]"
        />
      </div>
      <UAccordion :items="items">
        <template #default="{ item, open }" as="div">
          <div
            class="text-4xl font-bold flex items-center justify-between max-md:text-lg"
            :class="{ 'max-md:mt-6': open }"
          >
            <span
              class="whitespace-pre-wrap inline leading-[1.2] max-md:leading-[1.34]"
              ><span>{{ item.label.replace(item.accent, "") }}</span
              ><span
                class="bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
                v-for="(word, index) in item.accent.match(/(\S+|\s|\n)/g) || []"
                :key="index"
                ><span> </span>{{ word }}</span
              ></span
            >
            <UIcon
              variant="ghost"
              :name="'i-custom-arrow-down'"
              class="transition-transform duration-300 p-0 max-md:w-6 max-md:h-6 cursor-pointer max-md:shrink-0 max-md:mr-6"
              :class="{ 'rotate-180 max-md:self-start': open }"
            />
          </div>
        </template>
      </UAccordion>
    </div>
  </section>
</template>
