<template>
  <section
    v-if="items.length"
    class="lg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border divide-x divide-y"
  >
    <div class="p-4 -ml-[1px] -mt-[1px]" v-for="(item, i) in items">
      <v-card :item="item" class="h-full" />
    </div>
    <div class="border-t border-l -ml-[1px] -mt-[1px]" />
  </section>
  <section v-else class="p-8 border text-center">
    <h4>No result found</h4>
    <div class="text-sm mb-6">We can't find any horse matching your search</div>
    <nuxt-link
      to="/horses"
      class="h-10 px-8 bg-tint text-black text-xs uppercase font-bold inline-flex items-center"
    >
      <i class="fa-regular fa-refresh mr-1 text-lg" />
      Reset filter
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>();
const width = ref(0);
onMounted(() => {
  width.value = innerWidth;
  window.addEventListener("resize", () => (width.value = innerWidth));
});
</script>

<style scoped></style>
