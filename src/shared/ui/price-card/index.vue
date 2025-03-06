<script setup lang="ts">
import type { UiPriceCardProps } from "./types";
const props = defineProps<UiPriceCardProps>();
const textParts = computed(() => {
  if (!props.service.includes(props.serviceAccent)) {
    return { before: props.service, after: "" }; // Если акцентное слово отсутствует в заголовке
  }

  const [before, after] = props.service.split(props.serviceAccent);
  return { before, after };
});
</script>

<template>
  <div
    class="w-[91rem] h-[20rem] flex justify-between bg-jetBlack p-10 rounded-[50px] gap-x-4"
  >
    <div class="w-[45%] flex flex-col gap-y-3">
      <div class="text-4xl font-bold w-full leading-[3.59rem]">
        <span class="whitespace-pre-wrap inline"
          ><span v-if="textParts.before">{{ textParts.before }}</span
          ><span
            class="bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
            v-for="(word, index) in serviceAccent.match(/(\S+|\s|\n)/g) || []"
            :key="index"
            ><span> </span>{{ word }}</span
          ><span v-if="textParts.after">{{ textParts.after }}</span></span
        >
      </div>
      <p
        class="text-xl text-mediumGray leading-[2.01rem] whitespace-break-spaces"
      >
        {{ serviceDescription }}
      </p>
    </div>
    <div class="w-[35%] flex flex-col justify-center">
      <ul class="flex flex-col gap-y-6 text-xl font-semibold">
        <li
          v-for="item in guarantees"
          :key="item"
          class="flex items-center space-x-3"
        >
          <div
            class="w-[1.05rem] h-[1.05rem] rounded-full bg-gradient-to-r from-turquoise-100 to-green inline-block flex-shrink-0"
          ></div>
          <span class="leading-[1.79rem]">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="w-[19%] flex justify-end items-center gap-x-3">
      <p class="text-mediumGray text-xl" v-if="price && !isUnitPrice">от</p>
      <h3
        class="text-5xl font-bold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
        v-if="price"
      >
        ${{ price }}
      </h3>
      <p v-if="price && isUnitPrice" class="text-xl text-mediumGray">/шт</p>
      <h3
        class="text-[2rem] text-right leading-[2.386rem] font-semibold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
        v-if="!price"
      >
        Индивидуальная стоимость
      </h3>
    </div>
  </div>
</template>
