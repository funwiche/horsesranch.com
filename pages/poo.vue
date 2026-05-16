<template>
  {{ [...new Set(horses.map((el) => el.year))].sort() }} <br />
  {{
    [
      ...new Set(horses.filter((el) => el.year == 2020).map((el) => el.price)),
    ].sort()
  }}
  <br />

  <pre>{{
    horses.map((el) => {
      if (el.year != 2020) return el;
      let price = el.price < 7800 ? 7800 : el.price > 8000 ? 8000 : el.price;
      return {
        ...el,
        price,
        properties: {
          ...el.properties,
          price: `$${price.toFixed(2)}`,
        },
      };
    })
  }}</pre>
  <!-- // .filter((el) => new_horses.includes(el.slug)) -->
</template>

<script setup lang="ts">
definePageMeta({ layout: "blank" });
import horses from "@/resources/horses.json";
const new_horses = [
  // "austin-quarter-horse-palomino-gelding",
  // "avenger-quarter-horse-red-roan-gelding",
  // "bashiru-quarter-horse-palomino-gelding",
  // "cruiser-quarter-horse-gray-gelding",
  // "copper-quarter-horse-black-gelding",
  // "storm-quarter-horse-bay-gelding",
  // "billy-quarter-horse-palomino-gelding",
  // "parfect-quarter-horse-red-dun-gelding",
  // "arrow-quarter-horse-sorrel-rabicano-gelding",
  // "baylee-quarter-horse-bay-roan-gelding",

  // "bear-quarter-horse-buckskin-gelding",
  // "beauty-quarter-horse-palomino-mare",
  // "biggy-(bugsy)-quarter-horse-buckskin-gelding",
  // "bishop-quarter-horse-palomino-gelding",
  // "bolt-quarter-horse-blue-roan-gelding",
  // "boomer-quarter-horse-red-roan-gelding",
  // "champion-quarter-horse-chestnut-gelding",
  // "dusty-quarter-horse-sorrel-gelding",
  // "genius-quarter-horse-red-roan-gelding",
  // "goliath-quarter-horse-palomino-gelding",
  // "gizmo-quarter-horse-palomino-gelding",
  // "harvey-quarter-horse-black-gelding",
  // "legacy-quarter-horse-blue-roan-gelding",
  // "leo-quarter-horse-chestnut-gelding",
  // "lucky-quarter-horse-buckskin-gelding",
  "lucy-quarter-horse-buckskin-mare",
  "mick-quarter-horse-buckskin-gelding",
  "missy-quarter-horse-black-mare",
  "montana-quarter-horse-palomino-gelding",
  "nacho-quarter-horse-chestnut-gelding",
  "olaf-quarter-horse-gray-gelding",
  "patrick-quarter-horse-sorrel-gelding",
  "patriot-quarter-horse-bay-roan-gelding",
  "sahara-quarter-horse-red-roan-gelding",
  "sandy-quarter-horse-buckskin-mare",
  "silver-quarter-horse-buckskin-mare",
  "stones-quarter-horse-gray-gelding",
  "sugar-quarter-horse-buckskin-mare",
  "sunny-quarter-horse-palomino-gelding",
  "torch-quarter-horse-palomino-gelding",
  "whisper-quarter-horse-palomino-gelding",
  "wrangler-quarter-horse-red-roan-gelding",
];
</script>

<style scoped></style>
