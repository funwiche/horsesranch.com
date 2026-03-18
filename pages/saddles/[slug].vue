<template>
  <NotFound v-if="!item" />
  <section class="p-6" v-else>
    <div class="sm sm:md lg:lg">
      <div class="py-8 grid lg:grid-cols-2 gap-12">
        <div class="flex-1">
          <div
            class="center bg-white overflow-hidden aspect-[3/4] border border-black"
          >
            <img
              @click="contain = !contain"
              :src="item.images[image]"
              :alt="item.seoMeta.alt"
              class="h-full w-full object-center"
              :class="contain ? 'object-contain' : 'object-cover'"
            />
          </div>
          <div class="flex pt-4 gap-2">
            <img
              v-for="(n, i) in item.images"
              @click="image = i"
              :src="n"
              :alt="item.seoMeta.alt"
              :class="{ 'opacity-50 cursor-pointer': image != i }"
              class="aspect-square w-20 object-center object-cover hover:opacity-100"
            />
          </div>
        </div>
        <div class="flex-1 text-white">
          <h1 class="font-black font-serif">{{ item.title }}</h1>
          <h2 class="text-tint font-black">${{ $f.num(item.price, 0) }}</h2>
          <hr class="my-6" />
          <div>{{ item.seoMeta.desc }}</div>
          <hr class="my-6" />
          <div class="text-sm">
            <div
              v-for="[key, val] in Object.entries(item.properties)"
              class="mb-2 flex"
            >
              <div class="w-36 capitalize font-bold">{{ key }}</div>
              :
              <div class="flex-1 pl-2 opacity-75">
                {{ val }}
              </div>
            </div>
          </div>

          <div class="py-6">
            <h4 class="underline underline-offset-4 decoration-2">
              Extra Options with additional charge
            </h4>
            <div class="grid sm:grid-cols-3 gap-1">
              <div v-for="extra in extras" class="flex-start">
                <i
                  class="fa-solid fa-circle-check mr-2 text-tint text-[16px]"
                />
                {{ extra }}
              </div>
            </div>
          </div>

          <nuxt-link
            to="/contact"
            class="bg-tint text-black font-bold opacity-90 center h-12 px-8 hover:opacity-100"
          >
            Get a Saddle Quote
          </nuxt-link>
        </div>
      </div>
      <div class="border bg-white text-black p-8">
        <h3>Description</h3>
        {{ item.description }}
      </div>
      <section class="py-12">
        <div class="lg">
          <h3 class="text-3xl font-bold text-white">More Saddles</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
useSeo({
  title: item.value?.seoMeta.title,
  category: "Saddle",
  desc: item.value?.seoMeta.desc,
  image: item.value?.images[0],
  gallery: item.value?.images,
  imageAlt: item.value?.seoMeta.alt,
  price: item.value?.price,
  properties: Object.entries(item.value?.properties as any)
    .filter(([key]) => key != "price")
    .map(([key, value]) => ({
      "@type": "PropertyValue",
      name: $f.capz(key),
      value,
    })),
  breadcrumbs: [
    { name: "Saddles for sale", path: "/saddles" },
    { name: item.value?.title, path: route.path },
  ],
});
const image = ref(0);
const contain = ref(false);
const featured = [...saddles]
  .filter((el) => el.slug != route.params.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
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
