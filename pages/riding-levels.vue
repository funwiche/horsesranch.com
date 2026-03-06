<template>
  <v-breadcrums
    title="Riding Levels"
    desc="Different riding levels, and their breakdowns."
  />
  <section class="p-6 sm:p-12 bg-white">
    <div class="md">
      <div
        v-for="(level, i) in levels"
        :class="{ 'border-t pt-6 mt-6': i > 0 }"
      >
        <h3>{{ level.title }}</h3>
        <div class="text-sm">{{ level.description }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const levels = [
  {
    title: "💚 Kid Safe Horses",
    description:
      "Kid Safe horses represent the gold standard for safety and reliability. These calm, patient, and gentle equines are specifically suitable for young children, offering forgiveness for mistakes, steady pacing, and exceptional composure. Ideal for pony rides, first-time experiences, or building a child's confidence in the saddle.",
  },
  {
    title: "💛 Beginner Safe Horses",
    description:
      "Beginner Safe horses are perfectly suited for riders just starting out or with very limited experience. These calm, predictable, and dependable mounts tolerate wobbly seats, mixed cues, and light handling with patience. Requiring little more than basic direction, they focus on performing their job safely and steadily.",
  },
  {
    title: "🧡 Advanced Beginner Horses",
    description:
      "Advanced Beginner riders have developed balance and confidence to handle a horse at all speeds. Suitable horses may have more energy or require clearer cues while remaining forgiving and cooperative. Perfect for riders comfortable with cantering, changing gaits, and beginning independent riding on trails or in arenas.",
  },
  {
    title: "🩷 Intermediate Rider Horses",
    description:
      "Intermediate Rider horses suit those with experience across different horses and situations. Riders can walk, trot, canter, and possibly handle basic patterns or trail obstacles independently. These mounts may need more direction, consistency, or confidence from their rider and may not tolerate mistakes as easily.",
  },
  {
    title: "❤️ Advanced Rider Horses",
    description:
      "Advanced Rider horses match riders with the knowledge, balance, and independence to handle a variety of equines, including green, high-energy, or training-required horses. These mounts suit riders confident at all gaits who understand collection, lateral work, and can handle strong or reactive horses while safely developing the horse through challenges.",
  },
];
</script>

<style scoped></style>
