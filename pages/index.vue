<template>
  <section class="px-6 md:py-12">
    <div class="lg min-h-96 md:flex md:gap-12">
      <div class="flex-1">
        <img
          :src="`/slides/0${(slide % 6) + 1}.jpg`"
          class="aspect-[4/3] md:aspect-square rounded-xl object-cover object-center"
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
            Premium <br />Horses For Sale
          </h1>
          <div class="mb-6">
            {{ $app.desc }}
          </div>
          <v-btn title="available horses" to="/horses-for-sale" />
        </div>
      </div>
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
        <v-btn title="view all" to="/horses-for-sale" />
      </div>
    </div>
  </section>
  <hr class="lg" />
  <section class="text-white">
    <div class="lg md:flex">
      <div class="md:w-1/3 md:text-right p-8">
        <h2 class="font-black text-5xl mb-6">FAQs</h2>
        <div class="text-xl mb-6">Questions we often encounter.</div>
        <v-btn title="contact us" to="/contact-us" />
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
        to="/horses-for-sale"
        title="VIEW OUR HORSES"
        style="height: 48px; width: 240px; border-radius: 0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import products from "@/resources/products.json";

const featured = useFeatured();
import faqs from "@/resources/faqs.json";
const index = ref(20);
const slide = ref(0);
onMounted(() => setInterval(() => slide.value++, 6000));
// function generateHorseSlug(str: string) {
//   return str
//     .replace(/[\d.]/g, "")
//     .replace(/\s*hands?/gi, "")
//     .trim()
//     .replace(/\s+/g, " ")
//     .toLowerCase()
//     .replace(/\s/g, "-");
// }
</script>
