<template>
  <nuxt-link :to="to" class="btn-tint" :class="{ 'w-full': block }">
    {{ title }}
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ title: string; to?: string; block?: boolean }>();
</script>

<style scoped></style>
