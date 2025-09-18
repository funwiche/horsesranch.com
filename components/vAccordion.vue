<template>
  <section class="border border-[#e1e1e1] mb-4">
    <div
      @click="model == index ? (model = null) : (model = index)"
      class="bg-base flex-1 flex-start h-16 cursor-pointer"
    >
      <i
        class="fa-solid w-10 center"
        :class="index == model ? 'fa-minus' : 'fa-plus'"
      />
      <div class="flex-1 font-bold">{{ title }}</div>
    </div>
    <section
      ref="contentHTML"
      class="overflow-hidden transition-all duration-300"
      :style="`height:${index == model ? contentHeight : 0}px;`"
    >
      <div class="p-6 pl-10 text-sm">
        {{ content }}
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; content: string; index: number }>();
const model = defineModel();
const contentHTML = ref<HTMLElement | null>(null);
const contentHeight = ref(0);
onMounted(() => {
  if (!contentHTML.value) return;
  contentHeight.value = contentHTML.value?.scrollHeight;
});
</script>

<style scoped></style>
