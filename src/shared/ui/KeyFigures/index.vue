<script setup lang="ts">
import type { KeyFiguresProps } from "./types";

const props = defineProps<KeyFiguresProps>();
</script>

<template>
  <div class="text-center">
    <h1
      class="text-5xl leading-[100%] font-bold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
    >
      {{ props.Title }}
    </h1>
    <p class="text-xl leading-[100%] font-medium text-mediumGray mt-[1.2rem]">
      {{ props.Paragraph }}
    </p>
  </div>
</template>
