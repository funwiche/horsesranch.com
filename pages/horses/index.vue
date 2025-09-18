<template>
  <v-breadcrums title="Horses for Sale" />
  <section class="p-6 text-white">
    <section class="lg">
      <section class="py-8">
        Showing {{ starts + 1 }}-{{ starts + items.length }} of
        {{ products.length }} results
      </section>
      <div class="lg grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <v-card :item="item" v-for="item in items" :key="item.id" />
      </div>
      <div class="py-6 flex gap-2 overflow-x-auto">
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

<script lang="ts" setup>
import products from "@/resources/products.json";
const route = useRoute();
const limit = 24;
const page = computed(() => parseInt((route.query.page as string) || "1"));
const starts = computed(() => (page.value - 1) * limit);
const total = computed(() => Math.ceil(products.length / limit));

const items = computed(() =>
  products.slice((page.value - 1) * limit, page.value * limit)
);
function navigate(page: number) {
  navigateTo({ name: "horses", query: { ...route.query, page } });
  document.querySelector("#top")?.scrollIntoView();
}
</script>
