<template>
  <UButton size="sm">Связаться</UButton>
  <UButton size="md" disabled>Начать</UButton>
  <UButton color="primary" variant="outline" size="md">Мобилка</UButton>
  <UTabs :items="items" class="w-[10rem]" />
</template>

<script setup>
const items = [{
  label: 'EN',
}, {
  label: 'RU',
}]
</script>
