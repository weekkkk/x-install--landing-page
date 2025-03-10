<template>
  <LayoutHeaderWidget />
  <MainPageSectionsFeedBackSection class="mt-[16.5rem]" />
  <MainPageSectionsWelcome class="mt-[10.65rem] h-[52.55rem]" />
  <MainPageSectionsServices class="mt-[16.5rem]" />
  <PriceListWidget />
  <FeedBackFormWidget />
</template>

<script setup>
import { FaqWidget } from "#components";

useHead({
  title: "X-Install",
});
</script>
