<script setup lang="ts"></script>
<template>
  <section class="mt-[16rem] mb-[14.3rem] max-md:mb-[7.3rem] max-md:mt-[10rem]">
    <div class="relative flex justify-center">
      <UiBlurCircle
        color="w-[18.25rem] h-[18.25rem] max-md:w-[7rem] max-md:h-[7rem] max-md:-top-[4.2rem] max-md:-left-[5rem] max-md:blur-[6.5rem] absolute bg-turquoise-100 top-[1.65rem] left-[-5rem] blur-[17rem]"
      />
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <h1
            class="max-md:text-4xl max-md:text-center max-md:leading-[1.2] text-8xl font-bold leading-[1.191] text-gradient grow"
          >
            Остались вопросы?
          </h1>
        </div>
        <p
          class="max-md:text-base max-md:mt-4 mt-6 text-xl text-mediumGray font-medium leading-[1.2] text-center"
        >
          У вас есть <span class="text-gradient">вопрос</span>,
          <span class="text-gradient">идея</span> или <span
            class="text-gradient"
            >проект</span
          >,<br />
          в котором вам нужна помощь?
        </p>
        <div
          class="flex max-md:flex-col max-md:justify-center max-md:gap-x-0 max-md:w-full max-md:mt-10 max-md:gap-y-[0.70rem] items-center mt-20 gap-x-[0.70rem]"
        >
          <UButton
            :icon="'fa-brands:telegram-plane'"
            :class="'w-[1.44rem] h-[1.4rem]'"
            class="w-[14rem] h-[3.5rem] flex items-center justify-center max-md:w-full"
          />
          <UButton
            class="w-[14rem] h-[3.5rem] flex items-center justify-center text-lg font-semibold max-md:w-full"
            >help@xinstall.com</UButton
          >
          <UButton
            :icon="'fa-brands:skype'"
            :class="'w-[1.2rem] h-[1.2rem]'"
            class="w-[14rem] h-[3.5rem] flex items-center justify-center max-md:w-full"
          />
        </div>
      </div>
      <UiBlurCircle
        color="max-md:w-[10.85rem] max-md:h-[10.85rem] max-md:!blur-[8rem] max-md:-top-[8.39rem] max-md:-right-[6.24rem] w-[18.25rem] h-[18.25rem] absolute bg-violet top-[5rem] -right-5rem blur-[17rem]"
      />
    </div>
  </section>
</template>
