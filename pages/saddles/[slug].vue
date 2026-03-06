<template>
  <NotFound v-if="!item" />
  <section class="p-6" v-else>
    <div class="lg">
      <pre class="text-white"> {{ item }}</pre>
      <section class="px-6 py-12">
        <div class="lg">
          <h3 class="text-4xl font-black text-white">More Saddles</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            <v-saddle-card v-for="n in featured" :item="n" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import saddles from "@/resources/saddles.json";
const route = useRoute();
const item = computed(() =>
  [...saddles].find(({ slug }) => route.params.slug == slug),
);
const image = ref(0);
const contain = ref(false);
const featured = [...saddles].sort(() => Math.random() - 0.5).slice(0, 4);
</script>

<style scoped></style>
