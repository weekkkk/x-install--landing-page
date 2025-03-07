<script setup lang="ts">
import type { ServiceCardProps } from "../types";

const props = defineProps<ServiceCardProps>();
</script>

<template>
  <div
    class="w-[45rem] max-h-[35rem] flex flex-col items-center bg-[url('images/noise.webp')] bg-jetBlack pt-[5.8rem] pb-[8rem] rounded-[3rem] relative"
  >
    <NuxtImg :src="ImgPath" class="w-[17.5rem] h-[17.5rem] z-30" />
    <div class="text-center mt-[1.3rem] leading-[100%]">
      <h1
        class="text-2xl font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        {{ Title }}
      </h1>
      <h1 class="text-2xl font-semibold">{{ SubTitle }}</h1>
    </div>
    <NuxtImg
      src="images/gridServiceCard.webp"
      class="absolute top-0 w-[45rem] h-[35rem] z-20"
    />
    <!-- <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute z-40 w-[4.95rem] h-[4.95rem] top-28 right-[16.6rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute z-40 w-[4.95rem] h-[4.95rem] bottom-[13.95rem] left-[16.6rem]"
    /> -->
  </div>
</template>
