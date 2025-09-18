<template>
  <div class="p-6">
    <div class="lg grid grid-cols-3 gap-8">
      <v-card :item="item" v-for="item in featured" :key="item.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const featured = useFeatured();
</script>
