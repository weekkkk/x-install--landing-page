<script setup lang="ts">
const inputName = ref("");

const inputTelegram = ref("");

const textereaMessage = ref("");

const formState = {
  name: inputName.value,
  telegram: inputTelegram.value,
  message: textereaMessage.value,
};

const sendFormInfo = async () => {
  try {
    const data: FeedbackDataDto = {
      name: inputName.value,
      telegram: inputTelegram.value,
      message: textereaMessage.value,
    };
    await FeedbackService.sendFeedbackForm(data);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
  inputName.value = "";
  inputTelegram.value = "";
  textereaMessage.value = "";
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative max-md:w-[19.65rem] text-center">
      <h1
        class="text-6xl max-md:text-[1.75rem] max-md:leading-[1.2] font-bold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        {{ $t("feedBackPage.help") }}
      </h1>
      <p
        class="text-mediumGray text-center max-md:text-base text-xl mt-6 max-md:mt-4 max-md:pr-4 max-md:pl-4"
      >
        {{ $t("feedBackPage.consultation") }} <br class="max-md:hidden" />
        {{ $t("feedBackPage.proposal") }}
      </p>
      <UiBlurCircle
        color="bg-turquoise-100"
        class="absolute w-[11.15rem] h-[11.15rem] max-md:w-[10.2rem] max-md:h-[10.2rem] max-md:left-[4.75rem] max-md:-top-[2.95rem] left-24 bottom-4 -z-20 max-md:!blur-[10.5rem]"
      />
      <NuxtImg
        src="/images/grid.webp"
        class="absolute w-[28rem] max-md:-top-[7.55rem] max-md:!w-[19.65rem] max-md:!h-[19.65rem] h-[28rem] -top-[7.75rem] -z-30"
      />
    </div>
    <UForm
      :state="formState"
      @submit="sendFormInfo"
      class="flex flex-col items-center gap-4 max-md:gap-2 mt-20 max-md:mt-10"
    >
      <UFormGroup name="name">
        <UInput
          :placeholder="$t('feedBackPage.name')"
          v-model="inputName"
          :ui="{
            form: 'max-md:text-xs max-md:px-6 max-md:py-5 max-md:h-16',
            rounded: '!rounded-2xl',
          }"
          class="w-[45rem] max-md:w-[17.65rem] max-md:h-[3.9rem] leading-none"
        />
      </UFormGroup>
      <UFormGroup name="telegram">
        <UInput
          placeholder="Telegram"
          v-model="inputTelegram"
          :ui="{
            form: 'max-md:text-xs max-md:px-6 max-md:py-5 rounded-2xl max-md:h-16',
            rounded: '!rounded-2xl',
          }"
          class="w-[45rem] max-md:w-[17.65rem] max-md:h-[3.9rem] leading-none"
        />
      </UFormGroup>
      <UFormGroup name="message">
        <UTextarea
          :placeholder="$t('feedBackPage.message')"
          v-model="textereaMessage"
          class="w-[45rem] max-md:w-[17.65rem] max-md:text-xs leading-none"
          :ui="{
            form: 'h-[12.5rem] max-md:h-[11.8rem] max-md:text-xs max-md:px-6 max-md:py-5 rounded-2xl',
            rounded: '!rounded-2xl',
          }"
        />
      </UFormGroup>
      <UButton
        type="submit"
        class="w-[45rem] max-md:text-xs max-md:w-[17.65rem] h-[6.75rem] max-md:h-[2.9rem] flex items-center justify-center text-lg leading-none mt-6 max-md:mt-2"
      >
        {{ $t("feedBackPage.send") }}
      </UButton>
    </UForm>
  </div>
</template>
