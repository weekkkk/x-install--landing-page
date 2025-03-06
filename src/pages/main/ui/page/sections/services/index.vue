<script lang="ts" setup></script>

<template>
  <div class="relative">
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute top-[-18.5rem] left-[-6.5rem] w-[18.25rem] h-[18.25rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute top-[-18.5rem] right-[-6.5rem] w-[18.25rem] h-[18.25rem]"
    />
    <div class="text-center">
      <h1
        class="text-6xl leading-[100%] font-bold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        Услуги
      </h1>
      <p
        class="text-xl leading-[100%] text-mediumGray font-medium mt-[2.23rem]"
      >
        Внимательно относимся к каждому клиенту,<br />
        оказывая качественные услуги по минимальной цене
      </p>
    </div>
    <div>
      <ServiceCardWidget class="mt-20" />
    </div>
  </div>
</template>
