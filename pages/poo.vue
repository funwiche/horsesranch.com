<template>
  <div class="p-4 text-[8px]">
    {{
      [...horses].map((el) => {
        const price =
          pricelist.find((pl) => pl.name == el.title)?.price || el.price;
        return { ...el, price };
      })
    }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "test" });
import horses from "@/resources/horses.json";
import seoData from "@/resources/seoData.json";
const pricelist = [
  { name: "Copper", price: 8700 },
  { name: "Midnight", price: 8300 },
  { name: "Snoopy", price: 8600 },
  { name: "Stormzy", price: 7800 },
  { name: "Sunny", price: 8700 },
  { name: "Victoria", price: 7500 },
  { name: "Arrow", price: 8800 },
  { name: "Beauty", price: 8600 },
  { name: "Bello", price: 8600 },
  { name: "Bruce Lee", price: 8000 },
  { name: "Chlautile", price: 7800 },
  { name: "Cougar", price: 7900 },
  { name: "Daisy", price: 7800 },
  { name: "Davis", price: 6500 },
  { name: "Dream", price: 8400 },
  { name: "Florence", price: 7800 },
  { name: "Gucci", price: 8300 },
  { name: "Gunner", price: 7900 },
  { name: "Hercules", price: 8800 },
  { name: "Amarillo", price: 8900 },
  { name: "Holiday", price: 8000 },
  { name: "Hunter", price: 8400 },
  { name: "Kobby", price: 7900 },
  { name: "Lucky", price: 8600 },
  { name: "Mick", price: 8500 },
  { name: "Midnight", price: 8400 },
  { name: "Moana", price: 8800 },
  { name: "Moonshine", price: 8500 },
  { name: "Nacho", price: 8400 },
  { name: "Patrick", price: 8700 },
  { name: "Olaf", price: 8200 },
  { name: "Peach", price: 8800 },
  { name: "Picasso", price: 7600 },
  { name: "Picolo", price: 7800 },
  { name: "Pirate", price: 8800 },
  { name: "Queency", price: 7800 },
  { name: "Samba King", price: 7900 },
  { name: "Starlette", price: 7500 },
  { name: "Akira", price: 7800 },
  { name: "Ali", price: 7900 },
  { name: "Bandera", price: 7500 },
  { name: "Banjo", price: 7900 },
];
</script>

<style scoped></style>
