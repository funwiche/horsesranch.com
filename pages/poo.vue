<template>
  <pre>{{ horses }}</pre>
  <!-- <pre>{{
    horses.map((el) => {
      let year =
        products.find((data) => data.slug === el.slug)?.excerpt.slice(0, 4) ||
        "";
      let newYear = year;
      return {
        ...el,
        slug: el.slug.replaceAll(year, newYear),
        excerpt: el.excerpt.replaceAll(year, newYear),
        description: el.description.replaceAll(year, newYear),
        properties: {
          ...el.properties,
          age: `${new Date().getFullYear() - parseInt(newYear)} years old`,
        },
        seoMeta: {
          title: el.seoMeta.title.replaceAll(year, newYear),
          desc: el.seoMeta.desc.replaceAll(year, newYear),
          alt: el.seoMeta.alt.replaceAll(year, newYear),
        },
      };
    })
  }}</pre> -->
</template>

<script setup lang="ts">
definePageMeta({ layout: "blank" });
import saddles from "@/resources/saddles.json";
import horses from "@/resources/horses.json";
import products from "@/resources/products.json";
</script>

<style scoped></style>
