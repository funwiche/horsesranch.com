<template>
  <section
    class="lg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-t-0"
  >
    <div
      class="p-4 border-t"
      :class="
        i % 4 != 3 && width >= 1280
          ? 'border-r'
          : i % 3 != 2 && width < 1280 && width >= 968
          ? 'border-r'
          : i % 2 != 1 && width < 968 && width >= 600
          ? 'border-r'
          : 'border-r-0'
      "
      v-for="(item, i) in items"
    >
      <v-card :item="item" class="h-full" />
    </div>
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
