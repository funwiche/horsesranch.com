<template>
  <div class="relative group">
    <nuxt-link
      :to="to"
      class="center flex whitespace-nowrap px-3 py-1 uppercase text-xs font-bold relative"
    >
      {{ content }}
      <span
        class="absolute -bottom-2 size-2 rounded-full group-hover:bg-tint transition-colors"
      />
      <slot />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
defineProps<{ to: string; content: string }>();
</script>
