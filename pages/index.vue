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
          <div class="mb-4 text-tint">
            Please feel free to call, text or email us anytime within our
            working hours with any questions.
          </div>
          <v-btn title="available horses" to="/horses-for-sale" />
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

const poo = [
  {
    title: "1 – White Rock Ranch Cutter",
    slug: "1-white-rock-ranch-cutter",
    link: "https://seamlesshorsranch.com/horse/1-white-rock-ranch-cutter",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Ranch-Cutter.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Ranch-Cutter1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Ranch-Cutter2.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Ranch-Cutter3.jpg",
    ],
    price: 2100,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups $125 up-charge). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and is a full quarter horse bar width. This saddle features a Basketweave/Floral combo tooling with roughout jockey and fenders. These saddles known as “ranch cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 15.5″ and 16.5″ in stock and ready to ship!",
  },
  {
    title: "2 – White Rock Cutting Saddle",
    slug: "2-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/2-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle2.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle3.jpg",
    ],
    price: 2000,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, and 3-inch cantel and is a full quarter horse bar width. This saddle features Floral tooling with a padded seat and roughout fenders. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 15″ and 16″ in stock ready to ship!",
  },
  {
    title: "3 – White Rock Cutting Saddle",
    slug: "3-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/3-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle3-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle1-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle2-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle-1.jpg",
    ],
    price: 1990,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and is a full quarter horse bar width. This saddle features a Diamond tooling pattern with roughout jockey and fenders. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 16″ and 16.5″ in stock and ready to ship!",
  },
  {
    title: "4 – White Rock Cutting Saddle",
    slug: "4-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/4-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle1-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle2-1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/White-Rock-Cutting-Saddle3-1.jpg",
    ],
    price: 2100,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and is a full quarter horse bar width. This saddle features a Spide tooling pattern with a Braid Border on a roughout jockey and fenders. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 16″ in stock ready to ship!",
  },
  {
    title: "5 – White Rock Cutting Saddle",
    slug: "5-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/5-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/5-–-White-Rock-Cutting-Saddle.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/5-–-White-Rock-Cutting-Saddle2.jpg",
    ],
    price: 2000,
    Category: "Tacks",
    excerpt: "",
    description: "",
  },
  {
    title: "6 – White Rock Ranch Cutter",
    slug: "6-white-rock-ranch-cutter",
    link: "https://seamlesshorsranch.com/horse/6-white-rock-ranch-cutter",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/6-–-White-Rock-Ranch-Cutter.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/6-–-White-Rock-Ranch-Cutter1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/6-–-White-Rock-Ranch-Cutter3.jpg",
    ],
    price: 1990,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and is a full quarter horse bar width. This saddle features a Snake Border tooling on Light Oiled Leather with roughout jockey and fenders. These saddles known as “ranch cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 15.5″, 16.5″ and 17″ in stock and ready to ship!",
  },
  {
    title: "7 – White Rock Cutting Saddle",
    slug: "7-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/7-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/7-–-White-Rock-Cutting-Saddle.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/7-–-White-Rock-Cutting-Saddle1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/7-–-White-Rock-Cutting-Saddle2.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/7-–-White-Rock-Cutting-Saddle3.jpg",
    ],
    price: 2500,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and a full quarter horse bar width. This saddle features a Basketweave tooling on Rich Chocolate Brown Leather combined with a white Buckstitch set on a roughout jockey and fenders. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 16″ in stock ready to ship!",
  },
  {
    title: "8 – White Rock Cutting Saddle",
    slug: "8-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/8-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/8-–-White-Rock-Cutting-Saddle.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/8-–-White-Rock-Cutting-Saddle2.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/8-–-White-Rock-Cutting-Saddle1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/8-–-White-Rock-Cutting-Saddle3.jpg",
    ],
    price: 2500,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups – additional $125). It has a 9-inch front swell height, 13-inch width, and 3-inch cantel and is a full quarter horse bar width. This saddle features Snowflake tooling and bordering on Deep Chestnut Leather with White Buckstitch on a roughout jockey and fenders. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 16″ in stock ready to ship!",
  },
  {
    title: "9 – White Rock Cutting Saddle",
    slug: "9-white-rock-cutting-saddle",
    link: "https://seamlesshorsranch.com/horse/9-white-rock-cutting-saddle",
    images: [
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/9-–-White-Rock-Cutting-Saddle.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/9-–-White-Rock-Cutting-Saddle1.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/9-–-White-Rock-Cutting-Saddle2.jpg",
      "https://seamlesshorsranch.com/wp-content/uploads/2024/07/9-–-White-Rock-Cutting-Saddle3.jpg",
    ],
    price: 1990,
    Category: "Tacks",
    excerpt: "",
    description:
      "This White Rock Cutting Saddle is built on a Hadlock Brand, Buster Welch Tree, that carries a 5-year tree warranty, with Herman Oak leather, it comes standard with rawhide wrapped stirrups (pictured with Nettles stirrups $125 up-charge). It has a 9-inch front swell height, 13-inch width, 3-inch cantel, and a full quarter horse bar width. This saddle features a Shell tooling on Rich Chocolate Leather with roughout jockey and fenders. This saddle is built with a single rear skirt making it about 5 lbs lighter than any of the other saddles. These saddles known as “cutters” are some of the most versatile in the industry and are used for Trails, Ranch, Team Sorting, Cutting, and other disciplines as well. These trees fit a wide variety of horses from Quarter Horses to Draftcrosses to Gaited Horses. We have 16″ in stock ready to ship!",
  },
];
</script>
