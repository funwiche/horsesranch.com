<template>
  <nuxt-link
    :to="`/saddles/${item.slug}`"
    class="flex flex-col bg-white p-px text-black"
  >
    <img
      :src="item.images[0]"
      :alt="item.title"
      class="aspect-[3/4] object-cover object-center"
    />
    <div class="p-3 text-lg font-bold">{{ item.title }}</div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<style scoped></style>
