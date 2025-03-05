<script setup lang="ts"></script>
<template>
  <div class="flex items-center flex-col">
    <div class="w-[66.45rem]">
      <div class="text-8xl leading-[7.16rem] text-center font-bold">
        Лучшее решение <br />
        в области
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          Маркетинга
        </span>
      </div>
      <div class="text-xl leading-[1.79rem] font-medium text-center mt-14">
        X-Instals —
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          ведущий холдинг в сфере мобильного маркетинга </span
        ><span class="text-mediumGray">
          . Мы предлагаем <br />
          широкий спектр услуг по продвижению мобильных приложений и продуктов
          <br />
          с использованием
        </span>
        <span
          class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
        >
          современных технологий и стратегий
        </span>
      </div>
      <div class="flex justify-center gap-10 mt-[4.25rem]">
        <UButton
          size="md"
          class="flex justify-center w-[16.5rem] text-lg leading-[1.4915rem] font-semibold"
        >
          Начать
        </UButton>
        <UButton
          variant="outline"
          label="Наши услуги"
          class="flex justify-center w-[16.5rem] text-lg leading-[1.4915rem] font-semibold"
        >
          <template #trailing>
            <UIcon name="xi-i:arrow-right" class="w-6 h-6" />
          </template>
        </UButton>
      </div>
    </div>
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute left-[2.6rem] top-[15.5rem]"
    />
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute left-[75.35rem] right-[2.4rem] top-[29.15rem] w-[18.25rem] h-[18.25rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[9.3rem] top-[35.3rem] !w-[12.5rem] !h-[12.5rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute left-[63.25rem] right-[19rem] top-[12.2rem] !w-[13.75rem] !h-[13.75rem]"
    />
    <NuxtImg
      src="/images/grid.png"
      alt="gridBackground"
      class="absolute top-0 left-0 -z-20 w-full max-w-none"
    />
  </div>
</template>
