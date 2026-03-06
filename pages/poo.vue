<template>
  <div class="p-4 text-[8px]">
    {{
      horses
        .map((el) => ({
          ...el,
          ...seoData.find((data) => data.slug == el.slug),
        }))
        .filter((el) => el.setTitle)
    }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "test" });
import horses from "@/resources/horses.json";
import seoData from "@/resources/seoData.json";
</script>

<style scoped></style>
