<script lang="ts" setup></script>

<template>
  <div class="relative">
    <UiBlurCircle
      color="bg-turquoise-100"
      class="absolute top-[-6.5rem] left-[-6.5rem] w-[18.25rem] h-[18.25rem] max-md:w-[7.304rem] max-md:h-[7.304rem]"
    />
    <UiBlurCircle
      color="bg-violet"
      class="absolute top-[-18.5rem] right-[-6.5rem] w-[18.25rem] h-[18.25rem] max-md:w-[9.025rem] max-md:h-[9.025rem]"
    />
    <div class="text-center">
      <h1
        class="text-6xl max-md:text-[1.75rem] max-md:leading-[1.2] font-bold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
      >
        {{ $t("servicesPage.services") }}
      </h1>
      <p
        class="text-xl max-md:text-base max-md:leading-[1.2] text-mediumGray font-medium mt-6 max-md:mt-4"
      >
        {{ $t("servicesPage.clientCareBlock") }}<br class="max-md:hidden" />
        {{ $t("servicesPage.qualityServicesBlock") }}
      </p>
    </div>
    <div
      class="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-20 max-md:mt-10 max-md:justify-items-center"
    >
      <div
        class="w-[45rem] max-md:w-[17.65rem] max-md:h-[20rem] h-[35rem] flex flex-col items-center bg-[url('/images/noise.webp')] bg-jetBlack pt-[5.8rem] max-md:pt-[2.3rem] pb-[8rem] rounded-[3rem] relative"
      >
        <NuxtImg
          src="/images/magnifier.webp"
          class="w-[17.1rem] h-[17.1rem] max-md:w-[9.6rem] max-md:h-[9.6rem] z-30"
        />
        <div class="text-center mt-[1.7rem] leading-[100%]">
          <h1
            class="text-2xl max-md:text-lg max-md:leading-[1.45rem] font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
          >
            {{ $t("servicesPage.professional") }} <br class="md:hidden" />
            {{ $t("servicesPage.audit") }}
            <span class="text-white">
              <br class="max-md:hidden" />
              {{ $t("servicesPage.your") }} <br class="md:hidden" />
              {{ $t("servicesPage.application") }}</span
            >
          </h1>
        </div>
        <NuxtImg
          src="images/gridServiceCard.webp"
          class="absolute top-0 w-[45rem] h-[35rem] max-md:w-[17.65rem] max-md:h-[20rem] z-20"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] h-[6.95rem] z-[1] top-[7rem] left-[23.45rem] max-md:left-[5.4725rem]"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] z-[1] max-md:w-[2.8285rem] max-md:h-[2.8285rem] max-md:left-[9.65rem] max-md:top-[4.25rem] top-[16.25rem] left-[16.65rem]"
        />
      </div>
      <div
        class="w-[45rem] max-md:w-[17.65rem] max-md:h-[20rem] h-[35rem] flex flex-col items-center bg-[url('images/noise.webp')] bg-jetBlack pt-[5.8rem] max-md:pt-[2.3rem] pb-[8rem] rounded-[3rem] relative"
      >
        <NuxtImg
          src="/images/google-uac.webp"
          class="w-[18.2595rem] h-[17.856rem] max-md:w-[10.291rem] max-md:h-[10.4895rem] z-30"
        />
        <div class="text-center mt-[1.3rem] max-md:mt-[1.5rem] leading-[100%]">
          <h1
            class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
          >
            Google Uac
          </h1>
          <h1
            class="text-2xl max-md:text-lg max-md:mt-[.25rem] max-md:leading-[100%] font-semibold"
          >
            {{ $t("servicesPage.advertising") }}
          </h1>
        </div>
        <NuxtImg
          src="images/gridServiceCard.webp"
          class="absolute top-0 w-[45rem] h-[35rem] max-md:w-[17.65rem] max-md:h-[20rem] z-20"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] z-[1] top-[7rem] left-[23.45rem] max-md:left-[9.35rem] max-md:top-[3.3145rem]"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] z-[1] top-[16.25rem] left-[16.65rem] max-md:left-[5.5rem] max-md:top-[8.6rem]"
        />
      </div>
      <div
        class="w-[45rem] max-md:w-[17.65rem] max-md:h-[20rem] h-[35rem] flex flex-col items-center bg-[url('images/noise.webp')] bg-jetBlack pt-[5.8rem] max-md:pt-[2.8rem] pb-[8rem] rounded-[3rem] relative"
      >
        <NuxtImg
          src="/images/is.webp"
          class="absolute w-[6.2rem] top-[6.45rem] max-md:top-[2.55rem] max-md:left-[11.35rem] right-[11.37rem] h-[5.85rem] max-md:w-[2.95rem] max-md:h-[2.925rem] z-30"
        />
        <NuxtImg
          src="/images/unity.webp"
          class="absolute w-[11.6rem] top-[13.8rem] max-md:top-[5.95rem] max-md:right-[3.15rem] right-[10.95rem] h-[11.1rem] max-md:w-[6.05rem] max-md:h-[6.05rem] z-30"
        />
        <NuxtImg
          src="/images/figures.webp"
          class="absolute w-[9.4rem] max-md:top-[1.1055rem] max-md:left-[5rem] top-[3.381rem] left-[16.015rem] h-[11.95rem] max-md:w-[5.2rem] max-md:h-[5.475rem] z-30"
        />
        <NuxtImg
          src="/images/triangle.webp"
          class="absolute w-[10.532rem] max-md:top-[6.675rem] max-md:left-[1.9rem] top-[14.5rem] left-[9.4rem] h-[10.585rem] max-md:w-[5.466rem] max-md:h-[4.8925rem] z-30"
        />
        <div
          class="text-center mt-[18.7rem] max-md:mt-[10.999rem] leading-[100%]"
        >
          <h1
            class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
          >
            In-App
          </h1>
          <h1
            class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold"
          >
            {{ $t("servicesPage.advertising") }}
          </h1>
        </div>
        <NuxtImg
          src="images/gridServiceCard.webp"
          class="absolute top-0 w-[45rem] h-[35rem] max-md:w-[17.65rem] max-md:h-[20rem] z-20"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] z-[1] top-[10rem] left-[11.4rem] max-md:left-[3.275rem] max-md:top-[4.325rem]"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] z-[1] top-[15.8rem] left-[24.355rem] max-md:left-[9.7525rem] max-md:top-[7.225rem]"
        />
      </div>
      <div
        class="w-[45rem] max-md:w-[17.65rem] max-md:h-[20rem] h-[35rem] flex flex-col items-center bg-[url('images/noise.webp')] bg-jetBlack pt-[5.8rem] max-md:pt-[2.8rem] pb-[8rem] rounded-[3rem] relative"
      >
        <NuxtImg
          src="/images/ASO.webp"
          class="w-[31.75rem] mt-8 h-[14.6rem] max-md:w-[14.45rem] max-md:h-[5.8rem] z-30"
        />
        <div class="text-center mt-[3.3rem] leading-[100%]">
          <h1
            class="text-2xl max-md:text-lg max-md:leading-[100%] font-semibold bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent"
          >
            ASO {{ $t("servicesPage.optimization") }}
          </h1>
          <h1
            class="text-2xl max-md:text-lg max-md:mt-[0.4rem] max-md:leading-[100%] font-semibold"
          >
            {{ $t("servicesPage.anyApplication") }}
          </h1>
        </div>
        <NuxtImg
          src="images/gridServiceCard.webp"
          class="absolute top-0 w-[45rem] h-[35rem] max-md:w-[17.65rem] max-md:h-[20rem] z-20"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[2.8285rem] max-md:h-[2.8285rem] z-[1] top-[11.25rem] left-[14.35rem] max-md:top-20 max-md:left-16"
        />
        <UiBlurCircle
          color="bg-turquoise-100"
          class="absolute w-[6.95rem] h-[6.95rem] max-md:w-[3.2rem] max-md:h-[2.4rem] z-[1] top-[11.25rem] left-[26.2rem] max-md:top-[7.9rem] max-md:left-[10.4775rem]"
        />
      </div>
    </div>
  </div>
</template>
