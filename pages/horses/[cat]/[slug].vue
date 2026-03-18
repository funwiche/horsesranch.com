<template>
  <section v-if="item" class="p-6">
    <div class="sm sm:md lg:lg">
      <div class="py-8 grid lg:grid-cols-2 gap-12">
        <div class="flex-1">
          <div class="center bg-white overflow-hidden aspect-[5/4]">
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
          <div class="italic font-serif">
            {{ item.seoMeta.desc }}
          </div>
          <hr class="my-6" />
          <div class="text-sm">
            <div
              v-for="[key, val] in Object.entries(item.properties)"
              class="mb-2 flex"
            >
              <div class="w-20 capitalize font-bold">{{ key }}</div>
              :
              <div class="flex-1 pl-2">
                <span v-if="key == 'discipline'">
                  <span v-for="(n, i) in val.split(',').map((el) => el.trim())">
                    {{ i > 0 ? "," : "" }}
                    <nuxt-link
                      :to="`/horses?keyword=${encodeURIComponent(n)}`"
                      class="text-tint hover:underline"
                    >
                      {{ n }}
                    </nuxt-link>
                  </span>
                </span>
                <nuxt-link
                  v-else
                  :to="`/horses?${key}=${encodeURIComponent(val)}`"
                  class="text-tint hover:underline"
                >
                  {{ val }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <hr class="my-6" />
          <nuxt-link
            to="/contact"
            class="bg-tint text-black font-bold opacity-90 center h-12 px-8 hover:opacity-100"
          >
            Contact us about {{ item.title }}
          </nuxt-link>
        </div>
      </div>
      <div class="border bg-white text-black p-8">
        <h3>Description</h3>
        {{ item.description }}
      </div>
    </div>
  </section>
  <NotFound v-else />
  <section v-if="featured.length" class="px-6 py-12 text-white">
    <div class="lg">
      <h3 class="text-3xl font-bold">Related horses</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <v-card :item="item" v-for="item in featured" :key="item.slug" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import horses from "@/resources/horses.json";
import categories from "@/resources/categories.json";
const route = useRoute();
const item = computed(() =>
  [...horses].find(({ slug }) => route.params.slug == slug),
);
const category = computed(() =>
  categories.find((el) => el.slug == route.params.cat),
);
const properties = [];
// useSeo({
//   title: item.value?.seoTitle,
//   category: "Horse", //category.value?.title.slice(0, -1),
//   desc: item.value?.seoDesc,
//   image: item.value?.images[0],
//   gallery: item.value?.images,
//   imageAlt: item.value?.imageAlt,
//   price: item.value?.price,
//   properties: [
//     {
//       "@type": "PropertyValue",
//       name: "Breed",
//       value: item.value?.breed,
//     },
//     {
//       "@type": "PropertyValue",
//       name: "Gender",
//       value: item.value?.gender,
//     },
//     {
//       "@type": "PropertyValue",
//       name: "Color",
//       value: "Grey",
//     },
//     {
//       "@type": "PropertyValue",
//       name: "Height",
//       value: "14.2 hands",
//     },
//     {
//       "@type": "PropertyValue",
//       name: "Discipline",
//       value: "Trail Riding",
//     },
//   ],
//   breadcrumbs: [
//     { name: "Horses for sale", path: "/horses" },
//     { name: category.value?.title, path: `/horses/${route.params.cat}` },
//     { name: item.value?.title, path: route.path },
//   ],
// });
const image = ref(0);
const contain = ref(false);
const featured = [
  ...horses.filter(
    (el) => el.slug != route.params.slug && el.category == item.value?.category,
  ),
]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
</script>
