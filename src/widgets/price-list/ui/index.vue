<script setup lang="ts">
const items = [
  {
    label: "IOS",
  },
  {
    label: "Android",
  },
];
const title = `Мотивированные\nустановки в AppStore`;
const desc = `Выведение вашего приложения в топ выдачи по ключевым словам. Стоимость указана\nза одну мотивированную установку по одному\nключевому слову`;
const features = [
  "Любое количество установок",
  "Быстрое продвижение",
  "Низкая цена",
  "Низкая цена",
];
const price = 0.24;
const isUnit = true;
</script>
<template>
  <section class="flex flex-col items-center">
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
      <UTabs
        :items="items"
        class="w-[25rem] mb-[5rem]"
        :ui="{ tab: 'h-[3.5rem]' }"
      />
      <UiPriceCard
        :service-title="title"
        :service-description="desc"
        :guarantees="features"
        :price="price"
        :is-unit-price="isUnit"
      />
    </div>
  </section>
</template>
