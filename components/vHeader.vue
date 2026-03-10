<template>
  <header>
    <section class="px-6 py-4 max-lg:hidden">
      <div class="lg flex-start text-tint">
        <div class="flex-1 flex-start divide-x pr-8">
          <v-nav v-for="item in links.slice(0, 5)" :item="item" />
        </div>
        <nuxt-link to="/">
          <img src="/logo.png" :alt="$app.name" class="w-36" />
        </nuxt-link>
        <div class="flex-1 flex-end divide-x pl-8">
          <v-nav v-for="item in links.slice(5, 10)" :item="item" />
        </div>
      </div>
    </section>
    <section class="lg:hidden relative">
      <nuxt-link to="/" class="p-3 center relative">
        <img src="/logo.png" :alt="$app.name" class="w-24" />
      </nuxt-link>
      <i
        @click="open = !open"
        class="fa-light fa-bars-staggered -scale-x-100 text-3xl text-white center size-20 absolute right-0 top-2"
      />
    </section>
  </header>
  <aside class="lg:hidden">
    <div
      @click="open = !open"
      :class="open ? 'opacity-50' : 'opacity-0 pointer-events-none'"
      class="fixed inset-0 bg-black transition-opacity duration-500 z-10"
    />
    <nav
      :class="open ? ' translate-x-96' : 'translate-x-0'"
      class="bg-white w-96 max-w-[85vw] fixed -left-96 top-0 bottom-0 z-20 transition-transform duration-500 flex flex-col"
    >
      <div class="h-16 flex items-center justify-end">
        <i @click="open = !open" class="size-16 fa-regular fa-xmark center" />
      </div>
      <div class="flex-1 overflow-y-auto px-2 pb-6">
        <nuxt-link
          v-for="item in links"
          :to="item"
          @click="open = !open"
          class="py-3 px-6 flex rounded-full"
          :class="
            $route.name?.toString().startsWith(item.name)
              ? 'bg-[#474A48] font-bold text-tint'
              : 'font-medium'
          "
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import categories from "@/resources/categories.json";
const links: any = [
  { title: "Home", name: "index" },
  { title: "About", name: "about-us" },
  { title: "Our Horses", name: "horses" },
  { title: "Saddles", name: "saddles" },
  { title: "Hauling", name: "hauling" },
  { title: "Riding Levels", name: "riding-levels" },
  { title: "FAQs", name: "faqs" },
  { title: "How to buy", name: "how-to-buy" },
  { title: "Testimonials", name: "testimonials" },
  { title: "Contact", name: "contact-us" },
];
const open = ref(false);
// watch(useRoute(), () => (open.value = false));
</script>

<style scoped></style>
