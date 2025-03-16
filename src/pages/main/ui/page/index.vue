<template>
  <MainPageSectionsWelcome
    id="welcome"
    class="mt-[16.5rem] max-md:mt-[10rem]"
  />
  <MainPageSectionsPhone class="mt-[11.12rem] max-md:mt-[9.59rem]" />
  <MainPageSectionsPurposes
    id="aboutUs"
    class="mt-[15.44rem] max-md:mt-[9.6rem]"
  />
  <MainPageSectionsServices
    id="services"
    class="mt-[16.5rem] max-md:mt-[10rem]"
  />
  <MainPageSectionsFeedBackSection class="mt-[16.5rem] max-md:mt-[10rem]" />
  <PriceListWidget id="price" class="mt-[16.5rem]" />
  <FaqWidget />
  <SocialMediaWidget />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "X-Install",
});

const movingEls = ref<NodeListOf<HTMLElement> | null>(null)

const updatePositions = () => {
  console.log(movingEls.value);
  
  if(!movingEls.value) return
  
  movingEls.value.forEach((el) => {
    const targetOffset = window.scrollY / 10;

    el.style.transform = `translateY(${-targetOffset}px)`;
    el.style.transitionDuration = (targetOffset / 20 * 0.05) + "s" 
  });
};
const ticking = ref(false);

const handleScroll = (e?: Event) => {
  if (!ticking.value) {
    requestAnimationFrame(() => {
      updatePositions();
      ticking.value = false;
    });
    ticking.value = true;
  }
};
onMounted(() => {
  movingEls.value = document.querySelectorAll(".moving-element")
  handleScroll()

  document.addEventListener("scroll", handleScroll);
});


onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll); // Очищаем слушатель при удалении компонента
});
</script>
