<template>
  <v-breadcrums title="FAQs" desc="Questions we often encounter." />
  <section class="bg-white p-8">
    <div class="md">
      <v-accordion
        v-for="(item, i) in faqs"
        :title="item.title"
        :content="item.content"
        :index="i"
        v-model="model"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import faqs from "@/resources/faqs.json";
const model = ref(0);
</script>

<style scoped></style>
