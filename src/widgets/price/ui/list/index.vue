<script setup lang="ts">
import { iosServices, androidServices, tabs } from "./consts";
const activeTab = ref(0);
const currentComponents = computed(() =>
  activeTab.value === 0 ? iosServices : androidServices
);
</script>
<template>
  <section class="flex flex-col items-center">
    <div class="relative">
      <UiBlurCircle
        color="bg-turquoise-100"
        class="absolute top-8 right-[20rem] !w-30 !h-60"
      />
      <UiBlurCircle color="bg-turquoise-100" class="absolute left-[20rem]" />
    </div>
    <!-- <UiBlurCircle color="bg-turquoise-100" /> -->
    <div class="w-[36.8rem] flex flex-col justify-center items-center">
      <h2
        class="text-center inline-block text-6xl font-bold bg-gradient-to-r from-turquoise-100 to-green text-transparent bg-clip-text mb-6"
      >
        Цены
      </h2>
      <p class="text-xl text-center font-medium text-mediumGray mb-[4.25rem]">
        Предоставляем конкурентноспособные условия на услуги в области
        разработки gambling приложений и ASO продвижения
      </p>
    </div>
    <UTabs
      :items="tabs"
      class="w-[25rem] mb-[5rem] text-red-400 h-[3.5rem]"
      :ui="{ size: 'text-xl', height: 'h-[3.5rem]' }"
      v-model="activeTab"
    />
    <div class="flex flex-col gap-y-4">
      <UiPriceCard
        v-for="(item, id) in currentComponents"
        :key="id"
        :service="item.service"
        :service-accent="item.serviceAccent"
        :service-description="item.serviceDescription"
        :guarantees="item.guarantees"
        :price="item.price"
        :is-unit-price="item.isUnitPrice"
      />
    </div>
  </section>
</template>
