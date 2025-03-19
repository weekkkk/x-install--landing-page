<script setup lang="ts">
import { deskItems } from "./consts/deskItems";
import { mobItems } from "./consts/mobItems";
import { useMediaQuery } from "@vueuse/core";

const { t } = useI18n();

const isLargeScreen = useMediaQuery("(min-width: 768px)");
const items = computed(() => {
  return isLargeScreen.value ? deskItems(t) : mobItems(t);
});
</script>
<template>
  <section class="mt-[16.5rem] max-md:mt-[10rem]">
    <div class="flex flex-col items-center">
      <div class="relative w-full flex flex-col items-center">
        <h2
          class="max-md:text-[1.75rem] max-md:leading-[1.2] text-6xl font-bold text-transparent bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text mb-20 max-md:mb-10"
        >
          FAQ
        </h2>
        <!-- <UiBlurCircle
          v-if="isLargeScreen"
          :color="'bg-turquoise-100'"
          class="absolute left-[39.1rem] bottom-[2.5rem] !w-[11.15rem] !h-[11.15rem] !blur-[11rem]"
        /> -->
        <NuxtImg
          v-show="isLargeScreen"
          src="/images/faq-grid-w.webp"
          alt="gridBackground"
          class="absolute w-[28rem] h-[28rem] max-w-none -top-[12.15rem] left-[30.65rem] -z-20"
        />
        <!-- <UiBlurCircle
          :color="'bg-turquoise-100'"
          class="absolute left-[13.45rem] bottom-[3.55rem] !w-[12.65rem] !h-[12.65rem] max-md:-left-[0.25rem] max-md:bottom-[0.585rem] max-md:!w-[4.56rem] max-md:!blur-[5.5rem] max-md:!h-[4.56rem] !blur-[17rem]"
        />
        <UiBlurCircle
          :color="'bg-turquoise-100'"
          class="absolute -right-[5.85rem] bottom-[2.7rem] !w-[12.65rem] !h-[12.65rem] max-md:!w-[5.55rem] max-md:!h-[5.55rem] max-md:bottom-[0.39rem] max-md:-right-[1.85rem] max-md:!blur-[5.25rem] !blur-[15rem]"
        /> -->
      </div>
      <UAccordion :items="items">
        <template #default="{ item, open }" as="div">
          <div
            class="flex flex-col max-md:max-h-20 transition-all"
            :class="{
              'max-md:max-h-[5.85rem]': open,
            }"
          >
            <div
              class="max-md:mt-[2.5rem] max-md:-translate-y-1/2 text-4xl max-md:text-lg leading-[1.2] max-md:leading-[1.34] font-bold flex justify-between transition-all duration-700"
              :class="{ 'max-md:!-translate-y-0': open }"
            >
              <span class="whitespace-pre-wrap inline"
                ><template v-if="item.accent !== ''">
                  <span>{{ item.label.split(item.accent)[0] }}</span
                  ><span
                    class="bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
                  >
                    {{ item.accent }} </span
                  ><span>{{
                    item.label.split(item.accent)[1]
                  }}</span> </template
                ><template v-else>
                  {{ item.label }}
                </template></span
              >
              <div class="relative w-6">
                <UIcon
                  variant="ghost"
                  :name="'xi-i-arrow-down'"
                  class="transition-all p-0 max-md:w-6 max-md:h-6 cursor-pointer max-md:shrink-0 absolute top-1/2 right-0 -translate-y-1/2 duration-500"
                  :class="{ 'rotate-180 !translate-y-0 !top-0': open }"
                />
              </div>
            </div>
          </div>
        </template>
      </UAccordion>
    </div>
  </section>
</template>
