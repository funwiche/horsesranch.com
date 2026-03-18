<template>
  <div class="text-[8px]">{{ saddles }}</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "blank" });
import saddles from "@/resources/saddles.json";
import horses from "@/resources/horses.json";
</script>

<style scoped></style>
