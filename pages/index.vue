<template>
  <div class="p-6">
    <div class="lg grid sm:grid-cols-2 lg:grid-cols-3">
      <div
        class="p-4 border-t max-sm:border-r-0"
        :class="{ 'lg:border-r': i % 3 != 2, 'max-lg:border-r': i % 2 != 1 }"
        v-for="(item, i) in featured"
      >
        <v-card :item="item" class="h-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const featured = useFeatured();
</script>
