<script setup lang="ts">
import type { UiPriceCardProps } from "./types";
const props = defineProps<UiPriceCardProps>();
</script>
<template>
  <div
    class="flex w-[91rem] bg-jetBlack p-9 rounded-[50px] gap-x-[1rem] h-[20rem]"
  >
    <div class="w-[45%] flex flex-col gap-y-3">
      <h3
        class="text-4xl font-bold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text leading-[3.59rem]"
      >
        {{ serviceTitle }}
      </h3>
      <p
        class="text-xl text-mediumGray leading-[2.1rem] whitespace-break-spaces"
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
            class="w-[1.05rem] h-[1.05rem] rounded-full bg-gradient-to-r from-turquoise-100 to-green"
          ></div>
          <span class="leading-[1.79rem]">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="w-[20%] flex justify-end items-center gap-x-3">
      <p v-if="price && !isUnitPrice">от</p>
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
