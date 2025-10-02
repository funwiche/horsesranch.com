<template>
  <v-breadcrums title="Horses for Sale" />
  <section class="p-6 text-white">
    <section class="lg">
      <section class="py-8">
        Showing {{ starts + 1 }}-{{ starts + items.length }} of
        {{ products.length }} results
      </section>
      <v-archive :items="items" />
      <!-- <div
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
      </div> -->
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
// const width = ref(0);
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
// onMounted(() => {
//   width.value = innerWidth;
//   window.addEventListener("resize", () => (width.value = innerWidth));
// });
</script>
