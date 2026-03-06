<template>
  <Title>{{ title }}</Title>
  <section class="bg-tint p-8 min-h-24 text-black center flex-col">
    <h1 class="mb-0 text-3xl sm:text-5xl font-black font-serif uppercase">
      {{ title }}
    </h1>
    <div v-if="desc" class="mt-3 sm text-center text-lg font-semibold">
      {{ desc }}
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc?: string }>();
</script>

<style scoped></style>
