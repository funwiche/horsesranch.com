<template>
  <div v-if="model" class="mb-2 max-w-screen-sm">
    <div
      v-text="model"
      :class="
        success
          ? ' text-green-600 border-green-600'
          : ' text-red-600 border-red-600'
      "
      class="flex-start border rounded px-3 py-2 text-sm"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
defineProps<{ success?: boolean }>();
watch(model, (val) => {
  if (val) setTimeout(() => (model.value = ""), 6000);
});
</script>

<style scoped></style>
