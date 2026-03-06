<template>
  <v-breadcrums
    title="Saddles"
    desc="We are proud to have these Custom Saddles available to our clients."
  />
  <section class="p-6">
    <section class="lg">
      <section class="py-8 text-white">
        Showing all {{ saddles.length }} results
      </section>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <v-saddle-card v-for="item in saddles" :item="item" />
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import saddles from "@/resources/saddles.json";
</script>
