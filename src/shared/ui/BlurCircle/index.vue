<script setup lang="ts">
import type { UiBlurCircleProps } from "./types";

const props = defineProps<UiBlurCircleProps>();
</script>
<template>
  <div
    class="w-[15.7rem] h-60 rounded-full blur-[15rem] -z-10"
    :class="color"
  />
</template>
