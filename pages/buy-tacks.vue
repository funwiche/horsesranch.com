<template>
  <v-breadcrums title="Buy Tacks" />
  <section class="p-6 text-white">
    <section class="lg">
      <section class="py-8">Showing all {{ items.length }} results</section>
      <v-archive :items="items" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import products from "@/resources/products.json";
const items = products.filter((el) => (el.desc = "Horses")).slice(0, 8);
</script>
