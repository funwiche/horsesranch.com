<template>
  <v-breadcrums :title="title" />
  <section class="lg p-4 sm:p-8 gap-4 bg-black/50 grid sm:grid-cols-2 border">
    <div class="relative">
      <div class="text-white mb-1 text-sm">Sex:</div>
      <select v-model="sex" class="h-12 bg-white border">
        <option value="">Please select</option>
        <option value="Gelding">Gelding</option>
        <option value="Mare">Mare</option>
      </select>
      <i class="fa-light fa-chevron-down absolute bottom-2 right-2 text-2xl" />
    </div>
    <div class="relative">
      <div class="text-white mb-1 text-sm">Breed:</div>
      <select v-model="breed" class="h-12 bg-white border">
        <option value="">Please select</option>
        <option :value="cat.slug" v-for="cat in categories">
          {{ cat.title }}
        </option>
      </select>
      <i class="fa-light fa-chevron-down absolute bottom-2 right-2 text-2xl" />
    </div>
  </section>
  <section class="p-6 text-white">
    <section class="lg">
      <section v-if="results.length" class="pb-6">
        Showing {{ starts + 1 }}-{{ starts + items.length }} of
        {{ results.length }} results
      </section>
      <v-archive :items="items" />
      <div v-if="total > 1" class="py-6 flex gap-2 overflow-x-auto">
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
const limit = 24;
const breed = computed({
  get: () => route.query.breed || "",
  set: (breed) => {
    navigateTo({ name: "horses", query: { ...route.query, page: 1, breed } });
    window.scrollTo(0, 0);
  },
});
const sex = computed({
  get: () => route.query.sex || "",
  set: (sex) => {
    navigateTo({ name: "horses", query: { ...route.query, page: 1, sex } });
    window.scrollTo(0, 0);
  },
});
const results = computed(() =>
  horses
    .filter((el) => (breed.value ? el.category == breed.value : true))
    .filter((el) =>
      route.query.keyword
        ? (el.title + el.description + el.excerpt)
            .toLowerCase()
            .includes(route.query.keyword.toString().toLowerCase())
        : true,
    )
    .filter((el) =>
      sex.value
        ? el.sex.toLowerCase() == sex.value.toString().toLowerCase()
        : true,
    ),
);
const page = computed(() => parseInt((route.query.page as string) || "1"));
const starts = computed(() => (page.value - 1) * limit);
const total = computed(() => Math.ceil(results.value.length / limit));

const items = computed(() =>
  [...results.value].slice((page.value - 1) * limit, page.value * limit),
);
function navigate(page: number) {
  navigateTo({ name: "horses", query: { ...route.query, page } });
  window.scrollTo(0, 0);
}
const title = computed(() => {
  return breed.value
    ? categories.find((el) => el.slug == breed.value)?.title || "Our Horses"
    : sex.value
      ? `${sex.value} Horses`
      : route.query.keyword
        ? `${route.query.keyword}`
        : "Available Horses";
});
</script>

<style scoped></style>
