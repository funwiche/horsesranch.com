<template>
  <NotFound v-if="!item" />
  <section class="p-6" v-else>
    <Title>{{ item.setTitle }}</Title>

    <div class="sm sm:md lg:lg">
      <div class="py-8 grid lg:grid-cols-2 gap-12">
        <div class="flex-1">
          <div
            class="center bg-white overflow-hidden aspect-[3/4] border border-black"
          >
            <img
              @click="contain = !contain"
              :src="item.images[image]"
              :alt="item.imageAlt"
              class="h-full w-full object-center"
              :class="contain ? 'object-contain' : 'object-cover'"
            />
          </div>
          <div class="flex pt-4 gap-2">
            <img
              v-for="(n, i) in item.images"
              @click="image = i"
              :src="n"
              :alt="item.imageAlt"
              :class="{ 'opacity-50 cursor-pointer': image != i }"
              class="aspect-square w-20 object-center object-cover hover:opacity-100"
            />
          </div>
        </div>
        <div class="flex-1 text-white">
          <h1 class="font-black font-serif">{{ item.title }}</h1>
          <h2 class="text-tint font-black">${{ $f.num(item.price, 0) }}</h2>

          <div class="text-sm mb-4">
            {{ item.seoDesc }}
          </div>
          <div v-for="n in item.specs.split('|')" class="text-sm">
            {{ n }}
          </div>

          <div class="pt-6">
            <h4 class="underline underline-offset-4 decoration-2">
              Extra Options with additional charge
            </h4>
            <div class="grid sm:grid-cols-3 gap-2 text-sm">
              <div v-for="extra in extras" class="flex-start">
                <i class="fa-light fa-circle-check mr-2 text-tint" />
                {{ extra }}
              </div>
            </div>
          </div>
          <div class="pt-6">
            <h4 class="underline underline-offset-4 decoration-2">Keywords</h4>
            <span v-for="n in item.tags" class="text-xs font-bold">
              <nuxt-link
                :to="`/saddles?keyword=${encodeURIComponent(n)}`"
                class="text-tint hover:underline"
              >
                {{ n }} </nuxt-link
              >,
            </span>
          </div>
          <nuxt-link
            to="/contact-us"
            class="rounded-lg uppercase text-xs bg-[#625C33] opacity-90 inline-flex items-center h-16 px-8 hover:opacity-100"
          >
            Get a Saddle Quote
          </nuxt-link>
        </div>
      </div>
      <div class="border bg-white text-black p-8 rounded-lg">
        <h3>Description</h3>
        {{ item.description }}
      </div>
      <section class="py-12">
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
const extras = [
  "Floral Tooling",
  "Basket Weave Tooling",
  "Overlay Tooling",
  "Bucking Rolls",
  "Square Skirt",
  "Stitched Seat",
  "Back Rigging",
  "Add Diamonds",
  "Add Spots",
  "Texas Star Conchos",
  "Add Buck Stitching",
  "Stirrup Turners",
  "Optional Conchos",
  "Tie Strings",
  "Add Extra Rings",
];
</script>

<style scoped></style>
