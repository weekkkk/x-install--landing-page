<script setup lang="ts">
import type { UiPriceCardProps } from "~/src/shared/ui/price-card";

const items = [
  {
    label: "IOS",
  },
  {
    label: "Android",
  },
];

const iosServices: UiPriceCardProps[] = [
  {
    service: `Мотивированные\nустановки в AppStore`,
    serviceAccent: `Мотивированные\nустановки`,
    serviceDescription: `Выведение вашего приложения в топ выдачи по ключевым словам. Стоимость указана\nза одну мотивированную установку по одному\nключевому слову`,
    guarantees: [
      "Любое количество установок",
      "Быстрое продвижение",
      "Низкая цена",
      "Персональное консультирование",
    ],
    price: "0.24",
    isUnitPrice: true,
  },
  {
    service: `Разработка\nприложений на IOS`,
    serviceAccent: `приложений`,
    serviceDescription: `Продажа готовых приложений для арбитража\nтраффика или разработка под заказ`,
    guarantees: ["Индивидуальный подход"],
    price: "2999",
    isUnitPrice: false,
  },
  {
    service: `Продвижение\nInApp`,
    serviceAccent: `InApp`,
    serviceDescription: `Разработка стратегии для продвижения\nс помощью рекламных площадок Unity,\nIntegral и другие`,
    guarantees: [
      "Уникальная стратегия под вашу нишу",
      "Пополнение без скрытых %",
      "Запуск рекламных компаний",
    ],
    price: "5000",
    isUnitPrice: false,
  },
  {
    service: `Продвижение\nGoogle (UAC)`,
    serviceAccent: `Google (UAC)`,
    serviceDescription: `Разработка стратегии\nпродвижения с помощью\nрекламных площадок Google `,
    guarantees: [
      "Разработка шаблонов",
      "Креативов , Текстов",
      "Запуск рекламных компаний",
    ],
    price: "10,000",
    isUnitPrice: false,
  },
  {
    service: `Гарантированное\nпродвижение\nв топ по ключу`,
    serviceAccent: `Гарантированное\nпродвижение`,
    serviceDescription: `Стоимость формируется по результатам\nоценки каждого отдельного кейса`,
    guarantees: [
      "Оплата за результат",
      "Быстрое продвижение",
      "Уникальная система продвижения",
    ],
  },
  {
    service: `Бизнес\nсотрудничество`,
    serviceAccent: `Бизнес`,
    serviceDescription: `Мы открыты к взаимовыгодному сотрудничеству.\nРеализуем продвижение приложений в топы\nпо ключевым словам за долю в вашем приложении`,
    guarantees: [
      "Индивидуальный подход",
      "Мы инвестируем в ваше развитие",
      "Мы заинтересованы в успешном результате",
    ],
  },
];

const androidServices: UiPriceCardProps[] = [
  {
    service: `Мотивированные\nустановки в Play Market`,
    serviceAccent: `Мотивированные\nустановки`,
    serviceDescription: `Выведение вашего приложения в топ выдачи по ключевым словам. Стоимость указана\nза одну мотивированную установку по одному\nключевому слову`,
    guarantees: [
      "Любое количество установок",
      "Быстрое продвижение",
      "Низкая цена",
      "Персональное консультирование",
    ],
    price: "0.15",
    isUnitPrice: true,
  },
  {
    service: `Разработка\nприложений на Android`,
    serviceAccent: `приложений на Android`,
    serviceDescription: `Продажа готовых приложений для арбитража\nтраффика или разработка под заказ`,
    guarantees: [
      "Под любые источники трафика",
      "Персональное консультирование",
      "Быстрое получение результата",
    ],
    price: "2000",
    isUnitPrice: false,
  },
  {
    service: `Продвижение\nInApp`,
    serviceAccent: `InApp`,
    serviceDescription: `Разработка стратегии для продвижения\nс помощью рекламных площадок Unity,\nIntegral и другие`,
    guarantees: [
      "Уникальная стратегия под вашу нишу",
      "Пополнение без скрытых %",
      "Запуск рекламных компаний",
    ],
    price: "5000",
    isUnitPrice: false,
  },
  {
    service: `Продвижение\nGoogle (UAC)`,
    serviceAccent: `Google (UAC)`,
    serviceDescription: `Разработка стратегии\nпродвижения с помощью\nрекламных площадок Google `,
    guarantees: [
      "Разработка шаблонов",
      "Креативов , Текстов",
      "Запуск рекламных компаний",
    ],
    price: "10,000",
    isUnitPrice: false,
  },
];

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
      :items="items"
      class="w-[25rem] mb-[5rem] text-red-400 h-[3.5rem]"
      :ui="{ size: 'text-xl', height: 'h-[3.5rem]' }"
      v-model="activeTab"
    />
    <div class="flex flex-col gap-y-4">
      <UiPriceCard
        v-for="item in currentComponents"
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
