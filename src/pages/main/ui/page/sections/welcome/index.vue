<script setup lang="ts"></script>
<template>
  <div class="flex items-center flex-col">
    <div class="w-[66.45rem] max-md:w-[17.65rem]">
      <div
        class="text-8xl max-md:text-4xl max-md:leading-[3.6rem] leading-[7.16rem] text-center font-bold"
      >
        {{ $t("titleWelcome.bestSolution") }} <br />
        <span class="max-md:hidden">{{
          $t("titleWelcome.fieldOfExpertise")
        }}</span>
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          {{ $t("titleWelcome.solution") }}
        </span>
      </div>
      <div
        class="text-xl max-md:text-base max-md:leading-[1.2] leading-[1.79rem] font-medium text-center mt-14 max-md:mt-4"
      >
        X-Instals —
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          {{ $t("paragraphWelcome.leadingHolding") }}
          <span class="max-md:text-mediumGray">
            {{ $t("paragraphWelcome.area") }}</span
          ></span
        ><span class="text-mediumGray">
          {{ $t("paragraphWelcome.offer") }} <br class="max-md:hidden" />
          {{ $t("paragraphWelcome.aboutServices") }}
          <br />
          {{ $t("paragraphWelcome.using") }}
        </span>
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          {{ $t("paragraphWelcome.technologies") }}
          <span class="max-md:text-mediumGray">{{
            $t("paragraphWelcome.strategy")
          }}</span>
        </span>
      </div>
      <div
        class="flex justify-center gap-10 mt-[4.25rem] max-md:mt-[1.6rem] max-md:gap-4 max-md:w-full max-md:flex-col"
      >
        <UButton
          size="md"
          class="flex justify-center w-[16.5rem] text-lg max-md:text-xs leading-[1.4915rem] max-md:w-[17.6rem] font-semibold"
        >
          {{ $t("start") }}
        </UButton>
        <UButton
          variant="outline"
          :label="$t('ourServices')"
          class="flex justify-center w-[16.5rem] max-md:text-xs text-lg max-md:h-[2.8rem] max-md:w-[17.6rem] leading-[1.4915rem] font-semibold"
        >
          <template #trailing>
            <UIcon name="xi-i:arrow-right" class="w-6 h-6" />
          </template>
        </UButton>
      </div>
    </div>
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute left-[2.6rem] top-[15.5rem] max-md:w-[5.941rem] max-md:h-[6.17rem] max-md:top-[7.157rem] max-md:-left-[4.82rem] max-md:!blur-[5rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[9.3rem] top-[35.3rem] max-md:top-[15.36rem] max-md:-left-[2.72rem] w-[12.5rem] h-[12.5rem] max-md:w-[6.88rem] max-md:h-[7.03rem] max-md:!blur-[7rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute left-[75.35rem] right-[2.4rem] max-md:top-[12.78rem] max-md:left-[16.27rem] top-[29.15rem] w-[18.25rem] max-md:w-[6.87rem] max-md:h-[7.58rem] h-[18.25rem] max-md:!blur-[3.5rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[63.25rem] max-md:left-[13.85rem] max-md:top-[5.75rem] top-[12.2rem] w-[13.75rem] h-[13.75rem] max-md:w-[5.47rem] max-md:h-[5.7rem] max-md:!blur-[4rem]"
    />
    <NuxtImg
      src="/images/grid.webp"
      alt="gridBackground"
      class="absolute top-0 max-md:top-[15.5rem] left-0 -z-20 w-full max-w-none"
    />
  </div>
</template>
