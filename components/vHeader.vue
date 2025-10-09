<template>
  <header class="px-6">
    <div class="lg h-24 flex-between">
      <div>
        <nuxt-link to="/">
          <img src="/horses-ranch-logo.png" :alt="$app.name" class="w-40" />
        </nuxt-link>
      </div>
      <div class="max-lg:hidden flex-1 flex-end divide-x text-tint pl-8">
        <nuxt-link
          v-for="n in links"
          :to="n.path"
          class="center flex-col px-4 py-1 uppercase text-sm font-bold relative group"
        >
          {{ n.name }}
          <span
            class="absolute -bottom-2 size-2 rounded-full group-hover:bg-tint transition-colors"
          />
        </nuxt-link>
      </div>
      <i
        @click="open = !open"
        class="fa-solid text-2xl text-white center lg:hidden size-12 rounded-full bg-[#474A48] cursor-pointer"
        :class="open ? 'fa-xmark' : 'fa-bars'"
      />
    </div>
  </header>
  <nav
    @click="open = false"
    :class="open ? 'h-72' : 'h-0'"
    class="lg:hidden bg-white text-black flex flex-col divide-y overflow-hidden transition-all duration-300"
  >
    <nuxt-link v-for="n in links" class="flex-start h-10 px-6" :to="n.path">
      {{ n.name }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const links: any = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Our Horses", path: "/horses" },
  { name: "Hauling", path: "/hauling" },
  { name: "FAQs", path: "/faqs" },
  { name: "How to buy", path: "/how-to-buy" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact-us" },
];
const open = ref(false);
watch(useRoute(), () => (open.value = false));
</script>

<style scoped></style>
