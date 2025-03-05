<template>
  <LayoutHeaderWidget />
  <MainPageSectionsFeedBackSection class="mt-[16.5rem]" />
  <MainPageSectionsWelcome class="mt-[10.65rem] h-[52.55rem]" />
  <MainPageSectionsServices class="mt-[16.5rem]" />
  <PriceListWidget />
</template>

<script setup>
import { MainPageSectionsFeedBackSection } from "#components";

useHead({
  title: "X-Install",
});
onMounted(() => {
  document.addEventListener("scroll", () => {
    document.querySelectorAll(".moving-element").forEach((el) => {
      const speed = el.dataset.speed || 2; // Можно задать разную скорость через data-атрибут
      const offset = window.scrollY / speed;
      el.style.transform = `translateY(${-offset}px)`;
    });
  });
});
</script>
