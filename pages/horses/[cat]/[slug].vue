<template>
  <section v-if="item" class="p-6">
    <div class="sm sm:md lg:lg">
      <div class="py-8 grid lg:grid-cols-2 gap-12">
        <div class="flex-1">
          <div class="center bg-white overflow-hidden aspect-[5/4]">
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
          <hr class="my-6" />
          <div class="italic font-serif">
            {{ item.seoDesc }}
          </div>
          <hr class="my-6" />
          <div class="text-sm">
            <div class="flex">
              <div class="w-36">Category</div>
              :
              <div class="flex-1 pl-2">
                <nuxt-link
                  :to="`/horses?breed=${item.category}`"
                  class="text-tint hover:underline"
                >
                  {{ category?.title }}
                </nuxt-link>
              </div>
            </div>
            <div class="flex pt-1">
              <div class="w-36">Sex</div>
              :
              <div class="flex-1 pl-2">
                <nuxt-link
                  :to="`/horses?sex=${encodeURIComponent(item.sex)}`"
                  class="text-tint hover:underline"
                >
                  {{ item.sex }}
                </nuxt-link>
              </div>
            </div>
            <div class="flex pt-1">
              <div class="w-36">Keywords</div>
              :
              <div class="flex-1 pl-2">
                <span v-for="n in item.tags">
                  <nuxt-link
                    :to="`/horses?keyword=${encodeURIComponent(n)}`"
                    class="text-tint hover:underline"
                  >
                    {{ n }} </nuxt-link
                  >,
                </span>
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
useSeo({
  title: item.value?.seoTitle,
  desc: item.value?.seoDesc,
  image: item.value?.images[0],
  gallery: item.value?.images,
  imageAlt: item.value?.imageAlt,
  price: item.value?.price,
  breadcrumbs: [
    { name: "Horses for sale", path: "/horses" },
    { name: category.value?.title, path: `/horses/${route.params.cat}` },
    { name: item.value?.title, path: route.path },
  ],
});
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
