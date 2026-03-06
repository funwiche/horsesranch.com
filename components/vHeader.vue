<template>
  <header class="px-6">
    <div class="lg h-24 flex-between">
      <div>
        <nuxt-link to="/">
          <img src="/horses-ranch-logo.png" :alt="$app.name" class="w-60" />
        </nuxt-link>
      </div>
      <div class="max-lg:hidden flex-1 flex-end divide-x text-tint pl-8">
        <div v-for="n in links" class="group relative">
          <nuxt-link
            :to="n.path"
            class="center flex whitespace-nowrap px-3 py-1 uppercase text-xs font-bold relative"
          >
            {{ n.name }}
            <i
              v-if="n.path == '/horses'"
              class="fa-solid fa-chevron-down ml-2 group-hover:rotate-180 transition-all duration-300"
            />
            <span
              class="absolute -bottom-2 size-2 rounded-full group-hover:bg-tint transition-colors"
            />
          </nuxt-link>
          <div
            v-if="n.path == '/horses'"
            class="text-xs absolute z-10 top-6 left-0 bg-white text-black overflow-hidden h-0 group-hover:h-96 group-hover:overflow-y-auto transition-all duration-300 rounded-md"
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
          </div>
        </div>
      </div>
      <i
        @click="open = !open"
        class="fa-solid text-2xl text-white center lg:hidden size-12 rounded-full bg-[#474A48] cursor-pointer"
        :class="open ? 'fa-xmark' : 'fa-bars'"
      />
    </div>
  </header>
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
    <div class="flex-1 overflow-y-auto">
      <div v-for="n in links" class="text-xs">
        <nuxt-link
          :to="n.path"
          @click="n.path != '/horses' ? (open = !open) : null"
          class="py-3 pl-6 flex-start font-bold hover uppercase"
        >
          <span class="flex-1">{{ n.name }}</span>
          <i
            v-if="n.path == '/horses'"
            class="w-16 fa-regular center text-[16px]"
            :class="
              $route.path.startsWith('/horses')
                ? 'fa-chevron-up'
                : 'fa-chevron-down'
            "
          />
        </nuxt-link>
        <div v-if="n.path == '/horses' && $route.path.startsWith('/horses')">
          <div class="text-xs">
            <nuxt-link
              @click="open = !open"
              v-for="cat in categories"
              :to="`/horses/${cat.slug}`"
              class="py-2 px-6 flex-start hover text-xs"
            >
              {{ cat.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import categories from "@/resources/categories.json";
const links: any = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Our Horses", path: "/horses" },
  { name: "Horse Tacks", path: "/tacks" },
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
