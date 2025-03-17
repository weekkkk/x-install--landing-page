<script setup lang="ts">
import type { AccordionProps } from "./types";

const props = defineProps<AccordionProps>();

const openId = ref<number | null>(null);

const openContent = (id: number) => {
  openId.value = openId.value === id ? null : id;
};
</script>

<template>
  <div
    class="bg-jetBlack relative items-center w-full max-md:rounded-[2rem] max-md:w-[17.7rem] max-md:text-base mb-4 pl-10 pr-10 pb-[3.2rem] pt-[3.2rem] rounded-[2.5rem] min-h-[10rem] max-md:min-h-20 max-md:pl-6 max-md:py-0 flex justify-between transition-all duration-300"
    :class="{ 'max-md:pb-[2.95rem]': openId === item.id }"
    v-for="item in items"
  >
    <div
      :class="{ 'max-md:mt-6': openId === item.id }"
      class="transition-all duration-300"
    >
      <span
        class="text-4xl max-md:text-[1.25rem] whitespace-pre-wrap inline leading-[1.2] max-md:leading-[1.34] font-bold"
      >
        <template v-if="item.accent !== ''">
          <span>{{ item.label.split(item.accent)[0] }}</span>
          <span
            class="bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text"
          >
            {{ item.accent }}
          </span>
          <span>{{ item.label.split(item.accent)[1] }}</span>
        </template>
        <template v-else>
          {{ item.label }}
        </template>
      </span>
      <Transition
        enter-active-class="transition-all duration-200 ease-in-out"
        enter-from-class="max-h-0"
        enter-to-class="max-h-[50rem]"
        leave-active-class="transition-all duration-200 ease-in-out"
        leave-from-class="max-h-[50rem]"
        leave-to-class="max-h-0"
      >
        <div
          v-show="openId === item.id"
          class="mt-[0.8rem] text-mediumGray text-xl font-medium max-md:text-base overflow-hidden"
        >
          {{ item.content }}
        </div>
      </Transition>
    </div>
    <UIcon
      variant="ghost"
      :name="'xi-i-arrow-down'"
      class="absolute right-10 top-14 max-md:right-6 max-md:top-7 transition-transform duration-300 p-0 md:min-w-12 md:min-h-12 max-md:w-6 max-md:h-6 cursor-pointer max-md:shrink-0"
      :class="{
        'rotate-180 max-md:self-start': openId === item.id,
      }"
      @click="openContent(item.id)"
    />
  </div>
</template>
