<script setup lang="ts">
import type { ServiceCardProps } from "../types";

const props = defineProps<ServiceCardProps>();
</script>

<template>
  <div
    class="w-[45rem] max-md:w-[17.65rem] max-md:h-[20rem] h-[35rem] flex flex-col items-center bg-[url('images/noise.webp')] bg-jetBlack pt-[5.8rem] pb-[8rem] rounded-[3rem] relative"
  >
    <NuxtImg
      :src="imgPath"
      class="w-[15.1rem] h-[15.1rem] max-md:w-40 max-md:h-40 z-30"
    />
    <div class="text-center mt-[1.3rem] leading-[100%]">
      <h1
        class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        {{ title }}
      </h1>
      <h1 class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold">
        {{ subTitle }}
      </h1>
    </div>
    <NuxtImg
      src="images/gridServiceCard.webp"
      class="absolute top-0 w-[45rem] h-[35rem] max-md:w-[17.65rem] max-md:h-[20rem] z-20"
    />
  </div>
</template>
