<template>
  <MainPageSectionsWelcome
    id="welcome"
    class="mt-[16.5rem] max-md:mt-[10rem]"
  />
  <MainPageSectionsPhone class="mt-[11.12rem] max-md:mt-[9.59rem]" />
  <MainPageSectionsPurposes
    id="aboutUs"
    class="mt-[15.44rem] max-md:mt-[9.6rem]"
  />
  <MainPageSectionsServices
    id="services"
    class="mt-[16.5rem] max-md:mt-[10rem]"
  />
  <MainPageSectionsFeedBackSection class="mt-[16.5rem] max-md:mt-[10rem]" />
  <PriceListWidget id="price" class="mt-[16.5rem]" />
  <FaqWidget />
  <SocialMediaWidget />
</template>

<script lang="ts" setup>
useHead({
  title: "X-Install",
});
</script>
