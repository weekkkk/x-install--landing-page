<script setup lang="ts">
const { setLocale } = useI18n();

const switchLocalePath = useSwitchLocalePath();

/**Состояние шторки */
const isOpenDrawer = ref(false);

const route = useRoute();

/**Выбранный язык */
const selectedLang = ref(1);

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

  const lang = index === 0 ? "en" : "ru";

  const newPath = switchLocalePath(lang);

  if (newPath && newPath !== route.fullPath) {
    navigateTo({
      path: newPath,
    });
    document.body.classList.remove("overflow-hidden");
  }
};

/**Изменение состояния шторки */
const switchStateDrawer = () => {
  isOpenDrawer.value = !isOpenDrawer.value;

  document.body.classList.toggle("overflow-hidden", isOpenDrawer.value);
};

const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = (e: Event) => {
  if (!isOpenDrawer.value) {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      isHeaderVisible.value = true;
    } else {
      isHeaderVisible.value = currentScrollY < lastScrollY.value;
    }

    lastScrollY.value = currentScrollY;
  }
};

const scrollToSection = (id: string) => {
  const section = document.getElementById(String(id));

  if (isOpenDrawer.value) {
    switchStateDrawer();
  }

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToUpPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// onMounted(() => {
//   window.addEventListener("scroll", handleScroll);

//   selectedLang.value = route.fullPath == "/ru" ? 1 : 0;
// });

// onUnmounted(() => {
//   window.removeEventListener("scroll", handleScroll);
// });
</script>
<template>
  <header
    class="flex justify-between items-center w-full transition-all duration-300 z-40 fixed top-0 inset-x-0 px-10 py-[2.35rem] max-md:px-4 max-md:py-6"
    :class="[
      {
        '-translate-y-full': !isHeaderVisible,
      },
    ]"
  >
    <div class="z-20 flex w-full">
      <UIcon
        name="xi-i-logo"
        alt="Logo"
        class="w-[8.329rem] h-9 max-md:w-24 max-md:h-6 text-left justify-start cursor-pointer"
        @click="scrollToUpPage"
      />
    </div>
    <div
      class="text-white flex justify-center gap-20 mt-[0.5rem] max-md:hidden w-full"
    >
      <UButton
        @click="scrollToSection('aboutUs')"
        variant="link"
        class="p-0 text-lg leading-[1.4915rem] mr-[0.1rem]"
      >
        {{ $t("aboutUs") }}
      </UButton>
      <UButton
        @click="scrollToSection('services')"
        variant="link"
        class="p-0 text-lg leading-[1.4915rem] mr-[0.3rem]"
      >
        {{ $t("services") }}
      </UButton>
      <UButton
        @click="scrollToSection('price')"
        variant="link"
        class="p-0 text-lg leading-[1.4915rem]"
      >
        {{ $t("price") }}
      </UButton>
      <UButton variant="link" class="p-0 text-lg leading-[1.4915rem]">
        DSP
      </UButton>
    </div>

    <div class="flex justify-end items-center gap-4 max-md:hidden w-full">
      <UTabs
        v-model="selectedLang"
        @change="switchLocalization"
        :items="itemsLang"
        class="w-[8.5rem]"
        :ui="{ tab: 'h-[3.2rem]' }"
      />
      <UButton size="sm" class="w-[11.05rem] flex justify-center text-lg">
        {{ $t("contact") }}
      </UButton>
    </div>
    <UIcon
      name="xi-i-burger"
      v-show="!isOpenDrawer"
      @click="switchStateDrawer"
      class="md:hidden z-10 w-[1.2rem] h-[1.2rem]"
    />
    <UIcon
      name="xi-i-burger-open"
      v-show="isOpenDrawer"
      @click="switchStateDrawer"
      class="md:hidden z-10 w-[1.2rem] h-[1.2rem]"
    />

    <Transition
      enter-active-class="transition-opacity duration-200 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpenDrawer"
        class="md:hidden fixed inset-0 max-md:bg-black/50 flex flex-col backdrop-blur-2xl items-center justify-center text-white mt-[-.8rem]"
      >
        <div class="flex flex-col items-center gap-2 text-2xl">
          <UButton
            @click="scrollToSection('welcome')"
            variant="link"
            class="max-md:text-[1.75rem]"
          >
            {{ $t("home") }}
          </UButton>
          <UButton
            @click="scrollToSection('aboutUs')"
            variant="link"
            class="max-md:text-[1.75rem]"
          >
            {{ $t("aboutUs") }}
          </UButton>
          <UButton
            @click="scrollToSection('services')"
            variant="link"
            class="max-md:text-[1.75rem]"
          >
            {{ $t("services") }}
          </UButton>
          <UButton
            @click="scrollToSection('price')"
            variant="link"
            class="max-md:text-[1.75rem]"
          >
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
    </Transition>
  </header>
</template>
