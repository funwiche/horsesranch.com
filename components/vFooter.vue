<template>
  <footer>
    <hr class="lg" />
    <section class="px-6">
      <div
        class="lg text-white grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 divide-x max-md:divide-y"
      >
        <div class="py-12">
          <img
            src="/horses-ranch-logo.png"
            :alt="$app.name"
            class="w-40 mb-4"
          />
          <div>
            {{ $app.desc }}
          </div>
        </div>
        <div v-for="link in links" class="pl-8 py-12">
          <div class="mb-6">
            <h2 class="text-2xl font-black">{{ link.title }}</h2>
            <div class="w-16 border-2 rounded-lg border-tint -mt-2" />
          </div>
          <div v-if="link.title == 'Contact Info'">
            <div v-for="n in link.paths" class="flex items-center py-1.5">
              <i :class="`fa-solid fa-${n.icon} w-6`" />
              <div>
                <div class="text-xs opacity-50">{{ n.name }}</div>
                <div class="-mt-1">{{ n.path }}</div>
              </div>
            </div>
          </div>
          <div v-else>
            <nuxt-link
              :to="n.path"
              class="flex items-center py-2 hover:text-tint"
              v-for="n in link.paths"
            >
              <i class="fa-solid fa-circle-chevron-right w-6" />
              <span> {{ n.name }} </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-tint text-center text-xs p-6 font-medium">
      &copy {{ new Date().getFullYear() }} {{ $app.name }}. All Right Reserved
    </section>
  </footer>
</template>

<script setup lang="ts">
const links: any = [
  {
    title: "Quick Links",
    paths: [
      // { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Our Horses", path: "/horses-for-sale" },
      { name: "Hauling", path: "/hauling" },
      { name: "Testimonials", path: "/testimonials" },
    ],
  },
  {
    title: "Explore",
    paths: [
      { name: "Help & FAQs", path: "/faqs" },
      { name: "How to buy", path: "/how-to-buy" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Returns & Refund", path: "/returns-refund" },
    ],
  },
  {
    title: "Contact Info",
    paths: [
      { name: "Address", path: $app.address, icon: "map-location-dot" },
      { name: "Call Us", path: $app.phone, icon: "phone-rotary" },
      { name: "Email Us", path: $app.email, icon: "envelope" },
      { name: "Business Hours", path: $app.hours, icon: "clock" },
    ],
  },
];
</script>

<style scoped></style>
