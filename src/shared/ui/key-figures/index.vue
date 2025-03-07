<script setup lang="ts">
import type { keyFiguresProps } from "./types";

const props = defineProps<keyFiguresProps>();
</script>

<template>
  <div class="text-center">
    <h1
      class="text-5xl leading-none font-bold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent max-md:text-xl"
    >
      {{ props.Title }}
    </h1>
    <p
      class="text-xl leading-none font-medium text-mediumGray mt-[1.2rem] max-md:mt-2 max-md:text-base"
    >
      {{ props.Paragraph }}
    </p>
  </div>
</template>
