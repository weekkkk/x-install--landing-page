<template>
  <LayoutHeaderWidget />
  <MainPageSectionsWelcome class="mt-[16.5rem] max-md:mt-[10rem]" />
  <MainPageSectionsPhone />
  <MainPageSectionsPurposes class="mt-[7.4rem] max-md:mt-[1.7rem]" />
  <MainPageSectionsServices class="mt-[16.5rem] max-md:mt-[10rem]" />
  <MainPageSectionsFeedBackSection class="mt-[16.5rem] max-md:mt-[10rem]" />
  <PriceListWidget class="mt-[16.5rem]" />
  <FaqWidget />
  <SocialMediaWidget />
  <LayoutFooterWidget />
</template>

<script setup>
useHead({
  title: "X-Install",
});

let lastOffset = 0;
let ticking = false; // Флаг, чтобы не вызывать лишние кадры

const updatePositions = () => {
  document.querySelectorAll(".moving-element").forEach((el) => {
    const speed = el.dataset.speed || 6;
    const maxOffset = 200;
    const targetOffset = Math.min(window.scrollY / speed, maxOffset);

    lastOffset += (targetOffset - lastOffset) * 0.1;
    el.style.transform = `translateY(${-lastOffset}px)`;
  });

  ticking = false; // Сбрасываем флаг после отрисовки
};

const handleScroll = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updatePositions); // Запускаем один раз за кадр
  }
};
onMounted(() => {
  updatePositions();

  handleScroll();

  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll); // Очищаем слушатель при удалении компонента
});
</script>
