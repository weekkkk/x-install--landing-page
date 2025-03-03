<script setup lang="ts">
const { setLocale } = useI18n()


const items = [{
    label: 'EN',
}, {
    label: 'RU',
}]

/**Переключение локализации */
const switchLocalization = (index: number) => {
    switch (index) {
        case 0:
            setLocale('en')
            break;
        case 1:
            setLocale('ru')
            break;
    }
}
</script>
<template>
    <header class="flex justify-between items-center">
        <div>
            <UIcon name="xi-i-logo" alt="Logo" class="w-[9.25rem] h-9" />
        </div>
        <div class="text-white flex gap-20 mt-[0.5rem] ml-[12rem] w-[28.3rem]">
            <UButton variant="link" class="p-0 text-lg leading-[1.4915rem] mr-[0.1rem]">{{ $t('aboutUs') }}</UButton>
            <UButton variant="link" class="p-0 text-lg leading-[1.4915rem] mr-[0.3rem]">{{ $t('services') }}</UButton>
            <UButton variant="link" class="p-0 text-lg leading-[1.4915rem]">{{ $t('price') }}</UButton>
            <UButton variant="link" class="p-0 text-lg leading-[1.4915rem]">DSP</UButton>
        </div>
        <div class="flex items-center gap-4">
            <UTabs :default-index="1" @change="switchLocalization" :items="items" class="w-[8.5rem]"
                :ui="{ tab: 'h-[3.2rem]' }" />
            <UButton size="sm" class="w-[11.05rem] flex justify-center text-lg">Связаться</UButton>
        </div>
    </header>
</template>
