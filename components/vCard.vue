<template>
  <nuxt-link :to="`/horses/${item.slug}`" class="flex flex-col text-white">
    <div class="aspect-square overflow-hidden rounded-lg">
      <img
        :src="item.images[0]"
        :alt="item.title"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="p-1 flex-1">
      <h2 class="font-black font-serif">{{ item.title }}</h2>
      <span class="bg-tint px-4 py-2 rounded-full text-black"
        >${{ $f.num(item.price, 0) }}</span
      >
      <div class="py-4">
        {{ item.short_desc }}
      </div>
    </div>
    <div
      class="rounded-lg bg-[#625C33] opacity-90 center h-12 hover:opacity-100 font-bold"
    >
      View {{ item.title }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<style scoped></style>
