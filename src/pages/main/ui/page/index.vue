<template>
  <LayoutHeaderWidget />
  <MainPageSectionsWelcome class="mt-[10.65rem] h-[52.55rem]" />
  <MainPageSectionsPhone class="overflow-hidden" />
  <div class="h-[1000px]"></div>
</template>

<script setup>
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
