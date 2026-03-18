<template>
  <nuxt-link
    :to="`/horses/${item.category}/${item.slug}`"
    class="flex flex-col text-white"
  >
    <div class="aspect-square overflow-hidden">
      <img
        :src="item.images[0]"
        :alt="item.seoMeta.alt"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="flex-1 pt-2">
      <h2 class="font-black font-serif">{{ item.title }}</h2>
      <span class="bg-tint px-4 py-2 rounded-full text-black"
        >${{ $f.num(item.price, 0) }}</span
      >
      <div class="py-4">
        {{ item.excerpt }}
      </div>
    </div>
    <div
      class="rounded bg-[#625C33] opacity-90 center h-12 hover:opacity-100 font-bold"
    >
      View {{ item.title }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>

<style scoped></style>
