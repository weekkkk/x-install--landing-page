<script setup lang="ts">
</script>
<template>
    <div class="flex items-center flex-col">
        <div class=" w-[66.45rem]">
            <div class="text-8xl leading-[7.16rem] text-center font-bold">
                Лучшее решение <br /> в области <span
                    class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent">Маркетинга</span>
            </div>
            <div class="text-xl leading-[1.79rem] font-medium text-center mt-14
            ">
                X-Instals — <span
                    class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent">ведущий
                    холдинг в сфере мобильного маркетинга</span><span class="text-mediumGray">. Мы предлагаем <br />
                    широкий
                    спектр услуг
                    по продвижению
                    мобильных приложений и продуктов <br /> с использованием </span> <span
                    class="bg-gradient-to-r dark:from-turquoise-100 dark:to-green bg-clip-text text-transparent">современных
                    технологий
                    и стратегий</span>
            </div>
            <div class="flex justify-center gap-10 mt-[4.25rem]">
                <UButton size="md" class="flex justify-center w-[16.5rem] text-lg leading-[1.4915rem] font-semibold">
                    Начать</UButton>
                <UButton variant="outline" label="Наши услуги"
                    class="flex justify-center w-[16.5rem] text-lg leading-[1.4915rem] font-semibold ">
                    <template #trailing>
                        <UIcon name="xi-i:arrow-right" class="w-6 h-6" />
                    </template>
                </UButton>
            </div>
        </div>
        <UiBlurCircle class="top-[15.5rem] left-[2.6rem] right-[77.7rem]" />
        <NuxtImg src="/images/grid.png" />
    </div>
</template>
