<script setup lang="ts"></script>
<template>
  <div class="flex items-center flex-col">
    <div class="w-[66.45rem] max-md:w-[17.65rem]">
      <div
        class="text-8xl max-md:text-4xl max-md:leading-[3.395rem] leading-[7.16rem] text-center font-bold"
      >
        Лучшее решение <br />
        <span class="max-md:hidden">в области</span>
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          Маркетинга
        </span>
      </div>
      <div
        class="text-xl max-md:text-base max-md:leading-[24.4px] leading-[1.79rem] font-medium text-center mt-14 max-md:mt-[1.2rem]"
      >
        X-Instals —
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          ведущий холдинг
          <span class="max-md:text-mediumGray">
            в сфере мобильного маркетинга</span
          ></span
        ><span class="text-mediumGray">
          . Мы предлагаем <br class="max-md:hidden" />
          широкий спектр услуг по продвижению мобильных приложений и продуктов
          <br />
          с использованием
        </span>
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          современных технологий
          <span class="max-md:text-mediumGray"> и стратегий</span>
        </span>
      </div>
      <div
        class="flex justify-center gap-10 mt-[4.25rem] max-md:mt-[1.6rem] max-md:gap-4 max-md:w-full max-md:flex-col"
      >
        <UButton
          size="md"
          class="flex justify-center w-[16.5rem] text-lg max-md:text-xs leading-[1.4915rem] max-md:w-[17.6rem] font-semibold"
        >
          Начать
        </UButton>
        <UButton
          variant="outline"
          label="Наши услуги"
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
      class="absolute left-[2.6rem] top-[15.5rem] max-md:w-[5.45rem] max-md:h-[5.7rem] max-md:top-[11.5rem] max-md:left-[-6.4rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[9.3rem] top-[35.3rem] max-md:top-[15.35rem] max-md:left-0 w-[12.5rem] h-[12.5rem] max-md:w-[5.45rem] max-md:h-[5.7rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute left-[75.35rem] right-[2.4rem] max-md:top-[15.35rem] max-md:left-[13.85rem] top-[29.15rem] w-[18.25rem] max-md:w-[5.45rem] max-md:h-[5.7rem] h-[18.25rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[63.25rem]  max-md:left-[13.85rem] top-[12.2rem] w-[13.75rem] h-[13.75rem] max-md:w-[5.45rem] max-md:h-[5.7rem]"
    />
    <NuxtImg
      src="/images/grid.webp"
      alt="gridBackground"
      class="absolute top-0 max-md:top-[15.5rem] left-0 -z-20 w-full max-w-none"
    />
  </div>
</template>
