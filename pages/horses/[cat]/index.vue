<template>
  <not-found v-if="!category" />
  <v-breadcrums v-else :title="category.title" />
  <section v-if="category && items.length" class="p-6 text-white">
    <section class="lg">
      <section class="pb-6">
        Showing {{ starts + 1 }}-{{ starts + items.length }} of
        {{ results.length }} results
      </section>
      <v-archive :items="items" />
      <div
        v-if="results.length > limit"
        class="py-6 flex gap-2 overflow-x-auto"
      >
        <button
          v-for="n in total"
          class="size-10 border"
          :class="
            n == page
              ? 'bg-tint border-tint text-black'
              : 'hover:border-tint hover:text-tint'
          "
          @click="navigate(n)"
        >
          {{ n }}
        </button>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import horses from "@/resources/horses.json";
import categories from "@/resources/categories.json";
const route = useRoute();
const category = computed(() =>
  categories.find((el) => el.slug == route.params.cat),
);
const limit = 24;
const results = horses.filter((el) => el.category == route.params.cat);
const page = computed(() => parseInt((route.query.page as string) || "1"));
const starts = computed(() => (page.value - 1) * limit);
const total = Math.ceil(results.length / limit);

const items = computed(() =>
  [...results].slice((page.value - 1) * limit, page.value * limit),
);
function navigate(page: number) {
  navigateTo({ path: route.path, query: { ...route.query, page } });
  window.scrollTo(0, 0);
}
</script>

<style scoped></style>
