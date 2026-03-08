<template>
  <header>
    <section class="px-6 py-4 max-lg:hidden">
      <div class="lg flex-start text-tint">
        <div class="flex-1 flex-start divide-x pr-8">
          <v-nav
            v-for="n in links.slice(0, 5)"
            :to="n.path"
            :content="n.name"
          />
          <!-- <i
              v-if="n.path == '/horses'"
              class="fa-solid fa-chevron-down ml-2 group-hover:rotate-180 transition-all duration-300"
            />
            <div
              v-if="n.path == '/horses'"
              class="text-xs absolute z-10 top-6 left-0 bg-white text-black overflow-hidden h-0 group-hover:border group-hover:h-96 group-hover:overflow-y-auto transition-all duration-300 rounded-md"
            >
              <div class="py-0.5 font-medium divide-y divide-slate-200">
                <nuxt-link
                  v-for="n in categories"
                  :to="`/horses/${n.slug}`"
                  class="flex items-center px-3 h-8 text-xs uppercase whitespace-nowrap"
                  :class="
                    $route.params.cat == n.slug ? 'bg-black text-tint' : 'hover'
                  "
                >
                  {{ n.title }}
                </nuxt-link>
              </div>
            </div> -->
          <!-- </v-nav> -->
        </div>
        <nuxt-link to="/">
          <img src="/logo.png" :alt="$app.name" class="w-36" />
        </nuxt-link>
        <div class="flex-1 flex-end divide-x pl-8">
          <v-nav
            v-for="n in links.slice(5, 10)"
            :to="n.path"
            :content="n.name"
          />
        </div>
      </div>
    </section>
    <section class="lg:hidden">
      <nuxt-link to="/" class="p-3 center relative">
        <img src="/logo.png" :alt="$app.name" class="w-24" />
      </nuxt-link>
      <i
        @click="open = !open"
        class="fa-solid fa-bars text-xl text-white p-2 center bg-[#474A48]"
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
      <div class="flex-1 overflow-y-auto pb-6">
        <nuxt-link
          v-for="n in links"
          :to="n.path"
          @click="open = !open"
          class="p-3 font-medium hover center"
        >
          {{ n.name }}
        </nuxt-link>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import categories from "@/resources/categories.json";
const links: any = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Our Horses", path: "/horses" },
  { name: "Saddles", path: "/saddles" },
  { name: "Hauling", path: "/hauling" },
  { name: "Riding Levels", path: "/riding-levels" },
  { name: "FAQs", path: "/faqs" },
  { name: "How to buy", path: "/how-to-buy" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact-us" },
];
const open = ref(false);
// watch(useRoute(), () => (open.value = false));
</script>

<style scoped></style>
