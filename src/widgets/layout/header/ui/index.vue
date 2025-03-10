<script setup lang="ts">
const { setLocale } = useI18n();

/**Состояние шторки */
const isOpenDrawer = ref(false);

/**Выбранный язык */
const selectedLang = ref(1);

/**Путь фотки*/
const imgPath = computed<string>(() => {
  return isOpenDrawer.value ? "xi-i-burger-open" : "xi-i-burger";
});

const itemsLang = [
  {
    label: "EN",
  },
  {
    label: "RU",
  },
];

/**Переключение локализации */
const switchLocalization = (index: number) => {
  selectedLang.value = index;
  switch (index) {
    case 0:
      setLocale("en");
      break;
    case 1:
      setLocale("ru");
      break;
  }
};

/**Изменение состояния шторки */
const switchStateDrawer = () => {
  isOpenDrawer.value = !isOpenDrawer.value;
};

const isHeaderFixed = ref(false);
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    isHeaderFixed.value = false;
    isHeaderVisible.value = true;
  } else {
    isHeaderFixed.value = currentScrollY < lastScrollY.value;
  }

  lastScrollY.value = currentScrollY;
};

watch(isOpenDrawer, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden"; // Отключаем прокрутку страницы
  } else {
    document.body.style.overflow = ""; // Включаем обратно
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header
    class="flex justify-between items-center w-full transition-all duration-300"
    :class="[
      {
        'fixed top-0 left-0 pl-10 pr-8 py-[2.35rem] max-md:px-4 max-md:py-6':
          isHeaderFixed,
      },
    ]"
  >
    <div class="z-20">
      <UIcon
        name="xi-i-logo"
        alt="Logo"
        class="w-[9.25rem] h-9 max-md:w-24 max-md:h-6"
      />
    </div>
    <div
      class="text-white flex gap-20 mt-[0.5rem] ml-[12rem] w-[28.3rem] max-md:hidden"
    >
      <UButton
        variant="link"
        class="p-0 text-lg leading-[1.4915rem] mr-[0.1rem]"
      >
        {{ $t("aboutUs") }}
      </UButton>
      <UButton
        variant="link"
        class="p-0 text-lg leading-[1.4915rem] mr-[0.3rem]"
      >
        {{ $t("services") }}
      </UButton>
      <UButton variant="link" class="p-0 text-lg leading-[1.4915rem]">
        {{ $t("price") }}
      </UButton>
      <UButton variant="link" class="p-0 text-lg leading-[1.4915rem]">
        DSP
      </UButton>
    </div>

    <div class="flex items-center gap-4 max-md:hidden">
      <UTabs
        v-model="selectedLang"
        @change="switchLocalization"
        :items="itemsLang"
        class="w-[8.5rem]"
        :ui="{ tab: 'h-[3.2rem]' }"
      />
      <UButton size="sm" class="w-[11.05rem] flex justify-center text-lg">
        Связаться
      </UButton>
    </div>
    <UIcon
      :name="imgPath"
      @click="switchStateDrawer"
      class="md:hidden z-10 w-[1.2rem] h-[1.2rem]"
    />

    <div
      v-if="isOpenDrawer"
      class="md:hidden fixed inset-0 max-md:bg-black/50 flex flex-col backdrop-blur-2xl items-center justify-center text-white mt-[-.8rem]"
    >
      <div class="flex flex-col items-center gap-2 text-2xl">
        <UButton variant="link" class="max-md:text-[1.75rem]">
          {{ $t("home") }}
        </UButton>
        <UButton variant="link" class="max-md:text-[1.75rem]">
          {{ $t("aboutUs") }}
        </UButton>
        <UButton variant="link" class="max-md:text-[1.75rem]">
          {{ $t("services") }}
        </UButton>
        <UButton variant="link" class="max-md:text-[1.75rem]">
          {{ $t("price") }}
        </UButton>
        <UButton variant="link" class="max-md:text-[1.75rem]">DSP</UButton>
      </div>
      <div class="absolute bottom-[2.6rem] w-[17.65rem] h-14">
        <UTabs
          v-model="selectedLang"
          :items="itemsLang"
          @change="switchLocalization"
          class="w-[-webkit-fill-available]"
        />
      </div>
    </div>
  </header>
</template>
