<template>
  <section v-if="item" class="p-6">
    <Title>{{ item.title }}</Title>
    <div class="sm sm:md lg:lg">
      <div class="py-8 grid lg:grid-cols-2 gap-12">
        <div class="flex-1">
          <div class="center bg-white rounded-lg overflow-hidden aspect-[5/4]">
            <img
              @click="contain = !contain"
              :src="item.images[image]"
              :alt="item.title"
              class="h-full w-full object-center"
              :class="contain ? 'object-contain' : 'object-cover'"
            />
          </div>
          <div class="flex pt-4 gap-2">
            <img
              v-for="(n, i) in item.images"
              @click="image = i"
              :src="n"
              :alt="item.title"
              :class="{ 'opacity-50 cursor-pointer': image != i }"
              class="aspect-square w-20 object-center object-cover rounded-lg hover:opacity-100"
            />
          </div>
        </div>
        <div class="flex-1 text-white">
          <h1 class="font-black font-serif">{{ item.title }}</h1>
          <h2 class="text-tint font-black">${{ $f.num(item.price, 0) }}</h2>
          <section v-if="item.category == 'Horses'">
            <div class="py-6 border-y italic font-serif mb-6">
              {{ item.excerpt }}
            </div>
            <nuxt-link
              to="/contact-us"
              class="rounded-lg uppercase text-sm bg-[#625C33] opacity-90 inline-flex items-center h-16 px-8 hover:opacity-100 font-bold"
            >
              Contact us about {{ item.title }}
            </nuxt-link>
          </section>
          <section v-else class="py-4 border-t mt-6">
            <nuxt-link
              to="/contact-us"
              class="bg-tint text-black px-6 py-3 uppercase hover:opacity-75 inline-block"
            >
              Send Inquiry
            </nuxt-link>
          </section>
        </div>
      </div>
      <div class="border bg-white text-black p-8 rounded-lg">
        <h2>Description</h2>
        {{ item.description }}
      </div>
    </div>
  </section>
  <NotFound v-else />
  <section class="px-6 py-12 text-white">
    <div class="lg">
      <h3 class="text-4xl font-black">Related horses</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        <v-card :item="item" v-for="item in featured" :key="item.slug" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import horses from "@/resources/horses.json";
const route = useRoute();
const item = computed(() =>
  [...horses].find(({ slug }) => route.params.slug == slug),
);
const image = ref(0);
const contain = ref(false);
const featured = [...horses.filter((el) => el.category == "Horses")]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
</script>
