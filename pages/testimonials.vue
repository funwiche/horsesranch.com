<template>
  <v-breadcrums title="Testimonials" desc="What Our Customers Have to Say!" />
  <section class="bg-white p-8">
    <div class="md">
      <div
        v-for="n in testimonials"
        class="border-t border-[#e1e1e1] py-6 px-1"
      >
        <p class="mb-4">"{{ n.content }}"</p>
        <h5 class="text-black font-serif">{{ n.name }}, {{ n.location }}</h5>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import testimonials from "@/resources/testimonials.json";
</script>

<style scoped></style>
