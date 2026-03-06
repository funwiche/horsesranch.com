<template>
  <v-breadcrums title="Buy Tacks" />
  <section class="p-6 text-white">
    <section class="lg">
      <section class="py-8">Showing all {{ items.length }} results</section>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <nuxt-link
          v-for="item in items"
          :to="`/${item.slug}`"
          class="flex flex-col text-white mb-4"
        >
          <img
            :src="item.images[0]"
            :alt="item.title"
            class="aspect-square object-cover object-center"
          />
          <div class="text-center p-2">
            <h3 class="font-black font-serif mb-4">{{ item.title }}</h3>
            <div class="text-lg opacity-85 mb-3">
              ${{ $f.num(item.price, 0) }}
            </div>
            <span
              class="bg-tint text-black px-6 py-3 uppercase hover:opacity-75"
            >
              Learn more
            </span>
          </div>
        </nuxt-link>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import products from "@/resources/products.json";
const items = products.filter((el) => el.category == "Tacks");
</script>
