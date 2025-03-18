<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 768px)");

const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  $gsap.timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        $gsap.to(".box", {
          y: -self.scroll() / 5, // Вниз при скролле вниз, вверх при скролле вверх
          duration: 1,
        });
      },
    },
  });
});
</script>
<template>
  <div class="relative h-[48.73rem] max-md:h-[18.3rem]">
    <NuxtImg
      src="/images/body.webp"
      class="box absolute max-md:left-[4.35rem] max-md:w-[8.936rem] max-md:h-[18.301rem] w-[23.86rem] h-[48.73rem] top-0 left-[33.55rem] z-10"
      placeholder
      preload
    />
    <NuxtImg
      src="/images/screen.webp"
      class="box max-md:left-[4.8rem] max-md:rounded-none max-md:top-[0.405rem] absolute top-[1.08rem] max-md:w-[8.05rem] max-md:h-[17.5rem] left-[34.74rem] w-[21.5rem] h-[46.6rem] rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[3rem] rounded-br-[3rem]"
      placeholder
      preload
    />
    <NuxtImg
      src="/images/application1.png"
      class="box w-[26.75rem] max-md:left-[3.808rem] max-md:top-[4.34rem] max-md:w-[10.031rem] max-md:h-[2.344rem] h-[6.25rem] absolute top-[11.579rem] left-[32.1rem] z-20"
      preload
    />
    <NuxtImg
      src="/images/chart1.webp"
      class="box max-md:left-[12.77rem] max-md:top-[1.255rem] max-md:w-[4.2rem] max-md:h-[2.35rem] w-[10.8455rem] h-[6.2rem] absolute top-[4.329rem] left-[56.136rem] z-20"
      preload
    />
    <NuxtImg
      src="/images/rating1.webp"
      class="box max-md:left-[1.706rem] max-md:top-[7.57rem] max-md:w-[3.1rem] max-md:h-[2.5875rem] w-[8.35rem] h-[7.3rem] absolute top-[18.479rem] left-[25.95rem] z-30"
      preload
    />
    <NuxtImg
      src="/images/rating2.webp"
      class="box max-md:left-[14.936rem] max-md:top-[10.904rem] max-md:w-[3.592rem] max-md:h-[2.788rem] w-[9.897rem] h-[7.45rem] absolute top-[29.93rem] left-[59.93rem]"
      preload
    />
    <NuxtImg
      src="/images/chart2.webp"
      class="box max-md:-left-[.15rem] max-md:top-[13.55rem] max-md:w-[3.5405rem] max-md:h-[2.6875rem] w-[9.5rem] h-[7.5rem] absolute top-[37.28rem] left-[23.82rem]"
      preload
    />
    <NuxtImg
      src="/images/application2.png"
      class="box max-md:left-[4.3705rem] max-md:top-[7.917rem] max-md:w-[8.925rem] max-md:h-[2.1rem] w-[23.8rem] h-[5.6rem] absolute top-[20.58rem] left-[33.6rem] z-20"
      preload
    />

    <UiBlurCircle
      color="bg-white"
      class="max-md:left-[3.73rem] max-md:!w-[10.2rem] max-md:!h-[3.48rem] max-md:top-[3.26rem] max-md:!blur-[10rem] absolute top-[19.63rem] left-[31.89rem] -z-[5] !blur-[20rem] !w-[27.2rem] !h-[9.3rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute w-[15.7rem] h-[15rem] max-md:left-[5.88rem] max-md:top-[6.33rem] max-md:!w-[5.88rem] max-md:!blur-[5rem] max-md:!h-[5.625rem] top-[16.88rem] right-[37.8rem] !blur-[9rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      v-show="!isLargeScreen"
      class="absolute !w-[12.85rem] !h-[12.85rem] bottom-[13.89rem] right-[8.8rem]"
    />
    <NuxtImg
      src="/images/noisegraph1.webp"
      class="absolute max-md:w-[14.57rem] max-md:h-[9.49rem] max-md:top-[4.609rem] max-md:-left-[0.85rem] w-[72.15rem] h-[46.3rem] left-[1.3rem] top-[7.48rem] -z-[1] opacity-20"
    />
    <NuxtImg
      src="/images/graph2.svg"
      class="w-[36.49rem] h-[20.76rem] max-md:w-[7.26rem] max-md:h-[4.30rem] top-[17.53rem] max-md:top-[6.23rem] -left-[0.9rem] -z-[2] absolute"
    />
    <NuxtImg
      src="/images/noisegraph2.webp"
      class="w-[36.45rem] h-[20.76rem] max-md:w-[7.26rem] max-md:h-[4.30rem] max-md:top-[54.83rem] top-[17.53rem] -left-[2.5rem] -z-[2] absolute -rotate-180 opacity-20"
    />
    <NuxtImg
      src="/images/graph3.svg"
      class="absolute max-md:w-[12.75rem] max-md:h-[7.02rem] max-md:top-[4.55rem] max-md:-right-[1rem] w-[64.3rem] h-[33.55rem] top-[9.03rem] -right-[3rem] -z-[2]"
    />
    <NuxtImg
      src="/images/noisegraph3.webp"
      class="absolute max-md:w-[14.9rem] max-md:h-[7.02rem] max-md:top-[4.55rem] max-md:-right-[1rem] w-[71.85rem] h-[29.05rem] top-[11.82rem] -right-[1.3rem] -z-[3] mix-blend-overlay"
    />
    <!-- <NuxtImg
      src="/images/graph4.svg"
      class=""
    /> -->
    <NuxtImg
      src="/images/noisegraph4.webp"
      class="absolute w-[72.04rem] h-[21rem] top-[85.85rem] right-0 -z-[1] max-md:top-[8.65rem] max-md:left-[5.08rem]"
    />
    <UiGraph4 />
    <UiGraph1 />
  </div>
</template>
