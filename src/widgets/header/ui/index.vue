<script setup lang="ts">

const items = [{
    label: 'EN',
}, {
    label: 'RU',
}]
</script>

<template>
    <header class="flex justify-between items-center">
        <div>
            <UIcon name="my-icon-logo" class="w-[9.25rem] h-9" />
        </div>
        <div class="text-white flex gap-20 mt-[0.5rem] ml-[12rem] w-[28.3rem]">
            <UButton variant="link" class="p-0 text-[1.25rem] leading-[1.4915rem] mr-[0.1rem]">О нас</UButton>
            <UButton variant="link" class="p-0 text-[1.25rem] leading-[1.4915rem] mr-[0.3rem]">Услуги</UButton>
            <UButton variant="link" class="p-0 text-[1.25rem] leading-[1.4915rem]">Цены</UButton>
            <UButton variant="link" class="p-0 text-[1.25rem] leading-[1.4915rem]">DSP</UButton>
        </div>
        <div class="flex items-center gap-4">
            <UTabs :items="items" class="w-[8.5rem]" :ui="{ tab: 'h-[3.2rem]' }" />
            <UButton size="sm" class="w-[11.05rem] flex justify-center text-lg">Связаться</UButton>
        </div>
    </header>
</template>
