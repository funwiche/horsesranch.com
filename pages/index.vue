<template>
  <section class="px-6 py-20">
    <div class="lg min-h-96"></div>
  </section>
  <section class="px-6 py-16">
    <div class="lg text-white">
      <h2 class="font-black text-5xl mb-6">
        Available <span class="text-tint">Horses</span>
      </h2>
      <v-archive :items="featured" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const featured = useFeatured();
</script>
