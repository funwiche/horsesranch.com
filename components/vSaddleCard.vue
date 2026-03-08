<template>
  <nuxt-link
    :to="`/saddles/${item.slug}`"
    class="flex flex-col bg-white p-2 text-center text-black"
  >
    <img
      :src="item.images[0]"
      :alt="item.title"
      class="aspect-[3/4] object-cover object-center"
    />
    <div class="p-3">
      <div class="text-xl font-bold mb-2 font-serif">
        {{ item.title }}
      </div>
      <div class="mb-4">${{ $f.num(item.price, 0) }}</div>
      <span
        class="rounded bg-tint text-black opacity-90 hover:opacity-100 text-sm p-4 font-bold inline-flex"
      >
        Click For More Info
      </span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<style scoped></style>
