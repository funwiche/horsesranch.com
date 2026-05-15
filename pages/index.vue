<template>
  <pre class="text-white">
    {{ new_horses }}
  </pre>
  <section class="px-6 md:py-12">
    <div class="lg min-h-96 md:flex md:gap-12">
      <div class="flex-1">
        <img
          :alt="$app.name"
          :src="`/slides/0${(slide % 6) + 1}.jpg`"
          class="aspect-square rounded-xl object-cover object-center"
        />
      </div>
      <div class="flex-1 flex-start py-12">
        <div class="text-white">
          <h5
            class="font-black text-tint text-sm uppercase tracking-wider mb-6"
          >
            welcome to {{ $app.name }}
          </h5>
          <h1 class="font-black text-4xl sm:text-6xl mb-6">
            Family-Safe Ranch Horses for Sale in Texas
          </h1>
          <div class="mb-6">
            {{ $app.desc }}
          </div>
          <div class="mb-4 text-tint">
            Please feel free to call, text or email us anytime within our
            working hours with any questions.
          </div>
          <v-btn title="available horses" to="/horses" />
        </div>
      </div>
    </div>
  </section>
  <hr class="lg" />
  <section class="px-6 py-12">
    <div class="lg text-white text-center">
      <h2 class="font-black text-4xl sm:text-5xl mb-6">
        Our free Hauling service at {{ $app.name }} is available in some
        selected States! With a 30 Day Money Back Guarantee.
      </h2>
      <div class="sm:text-lg mb-4">
        You do not need to worry about paying extra for shipping if you are
        within our FREE SHIPPING ZONE as it is already inclusive in the horse
        price. We ship all over the USA, South America, Canada, Europe and Asia.
        Our horses will come health guaranteed!
      </div>
      <nuxt-link class="">
        <v-btn title="Learn More" to="/hauling" />
      </nuxt-link>
    </div>
  </section>
  <hr class="lg" />
  <section class="px-6 py-16">
    <div class="lg text-white">
      <h2 class="font-black text-5xl mb-6">
        Available <span class="text-tint">Horses</span>
      </h2>
      <v-archive :items="featured" />
      <div class="pt-6 center">
        <v-btn title="view all" to="/horses" />
      </div>
    </div>
  </section>
  <hr class="lg" />
  <section class="text-white">
    <div class="lg md:flex">
      <div class="md:w-1/3 md:text-right p-8">
        <h2 class="font-black text-5xl mb-6">FAQs</h2>
        <div class="text-xl mb-6">Questions we often encounter.</div>
        <v-btn title="contact us" to="/contact" />
      </div>
      <div class="md:w-2/3 border-l">
        <div class="border-b" v-for="(item, i) in faqs.slice(0, 6)">
          <div
            @click="i == index ? (index = 20) : (index = i)"
            class="flex-start text-tint cursor-pointer pr-4 lg:pr-1"
          >
            <div class="flex-1 p-6 font-semibold">
              {{ item.title }}
            </div>
            <i class="fa-solid" :class="i == index ? 'fa-minus' : 'fa-plus'" />
          </div>
          <div
            class="text-sm transition-all duration-300 overflow-hidden"
            :class="i == index ? 'max-h-[1000px]' : 'max-h-0'"
          >
            <div class="p-6 pt-0">{{ item.content }}</div>
          </div>
        </div>
        <div class="p-6">
          <v-btn title="view all" to="/testimonials" />
        </div>
      </div>
    </div>
  </section>
  <section
    class="text-white bg-[url('/breadcumbs.png')] bg-cover bg-center mb-12"
  >
    <div class="text-center bg-black/65 p-12 md:p-20">
      <div class="text-lg uppercase mb-4 text-tint font-semibold">
        we have amazing offers now!
      </div>
      <h2 class="font-black text-4xl sm:text-5xl mb-6">
        Purchase 3+ Horses and we will ship for free
      </h2>
      <div class="text-xl mb-6">
        All horses come with a 30 days Money-Back guarantee.
      </div>
      <v-btn
        to="/horses"
        title="VIEW OUR HORSES"
        style="height: 48px; width: 240px; border-radius: 0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const featured = useFeatured();
import faqs from "@/resources/faqs.json";
const index = ref(20);
const slide = ref(0);
onMounted(() => setInterval(() => slide.value++, 6000));
const new_horses = [
  "austin-quarter-horse-palomino-gelding",
  "avenger-quarter-horse-red-roan-gelding",
  "bashiru-quarter-horse-palomino-gelding",
  "cruiser-quarter-horse-gray-gelding",
  "copper-quarter-horse-black-gelding",
  "storm-quarter-horse-bay-gelding",
  "billy-quarter-horse-palomino-gelding",
  "parfect-quarter-horse-red-dun-gelding",
  "arrow-quarter-horse-sorrel-rabicano-gelding",
  "baylee-quarter-horse-bay-roan-gelding",
  "bear-quarter-horse-buckskin-gelding",
  "beauty-quarter-horse-palomino-mare",
  "biggy-(bugsy)-quarter-horse-buckskin-gelding",
  "bishop-quarter-horse-palomino-gelding",
  "bolt-quarter-horse-blue-roan-gelding",
  "boomer-quarter-horse-red-roan-gelding",
  "champion-quarter-horse-chestnut-gelding",
  "dusty-quarter-horse-sorrel-gelding",
  "genius-quarter-horse-red-roan-gelding",
  "goliath-quarter-horse-palomino-gelding",
  "gizmo-quarter-horse-palomino-gelding",
  "harvey-quarter-horse-black-gelding",
  "legacy-quarter-horse-blue-roan-gelding",
  "leo-quarter-horse-chestnut-gelding",
  "lucky-quarter-horse-buckskin-gelding",
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
