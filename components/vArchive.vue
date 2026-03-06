<template>
  <section
    class="lg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border divide-x divide-y"
  >
    <div class="p-4 -ml-[1px] -mt-[1px]" v-for="(item, i) in items">
      <v-card :item="item" class="h-full" />
    </div>
    <div class="border-t border-l -ml-[1px] -mt-[1px]" />
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
