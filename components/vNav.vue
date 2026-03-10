<template>
  <div class="relative group">
    <nuxt-link
      :to="item"
      class="center flex whitespace-nowrap px-3 py-1 uppercase text-xs font-bold relative"
    >
      {{ item.title }}
      <span
        v-if="$route.name?.toString().startsWith(item.name)"
        class="absolute -bottom-2 h-2 rounded-full bg-tint w-6"
      />
      <span
        v-else
        class="absolute -bottom-2 size-2 rounded-full group-hover:bg-tint transition-colors"
      />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: any }>();
</script>
