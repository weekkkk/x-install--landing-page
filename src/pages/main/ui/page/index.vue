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
useHead({
  title: "X-Install",
});

function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

let isAnim = true;

const movingEls = ref<NodeListOf<HTMLElement> | null>(null);
const lastOffset = ref<number>(0);
const updatePositions = () => {
  if (!movingEls.value) return;

  movingEls.value.forEach((el) => {
    const targetOffset = Math.min(window.scrollY / 6, 200);

    const duration = Math.abs(lastOffset.value - targetOffset) * 8;
    el.style.transform = `translateY(${-targetOffset}px)`;
    el.style.transitionDuration = duration + "ms";
    lastOffset.value = targetOffset;

    console.log(duration);

    if (!duration) {
      document.addEventListener("scroll", handleScroll, { once: true });
      return;
    }

    setTimeout(() => {
      updatePositions();
    }, duration);
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
  movingEls.value = document.querySelectorAll(".moving-element");
  updatePositions();

  document.addEventListener("scroll", handleScroll, { once: true });
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll); // Очищаем слушатель при удалении компонента
});
</script>
