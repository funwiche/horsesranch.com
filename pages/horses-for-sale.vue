<template>
  <v-breadcrums title="Horses for Sale" />
  <section class="p-6 text-white">
    <section class="lg">
      <section class="py-8">
        Showing {{ starts + 1 }}-{{ starts + items.length }} of
        {{ horses.length }} results
      </section>
      <v-archive :items="items" />
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
import horses from "@/resources/horses.json";
const route = useRoute();
const limit = 24;
const page = computed(() => parseInt((route.query.page as string) || "1"));
const starts = computed(() => (page.value - 1) * limit);
const total = Math.ceil(horses.length / limit);

const items = computed(() =>
  [...horses].slice((page.value - 1) * limit, page.value * limit),
);
function navigate(page: number) {
  navigateTo({ name: "horses-for-sale", query: { ...route.query, page } });
  window.scrollTo(0, 0);
}
</script>
