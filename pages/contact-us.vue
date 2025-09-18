<template>
  <v-breadcrums title="Contact Us" desc="Let’s Get In Touch!" />
  <section class="bg-white">
    <div class="sm md:lg md:flex gap-10 p-6 sm:p-12">
      <div class="flex-1 pb-10">
        <h2 class="text-4xl font-black uppercase">
          Contact <br />
          Information
        </h2>
        <div class="w-16 border-2 rounded-lg border-tint mb-6" />
        <div v-for="n in links" class="flex items-center pb-6">
          <i
            :class="`fa-solid fa-${n.icon}  size-16 text-2xl center bg-tint text-black rounded-md`"
          />
          <div class="flex-1 pl-3">
            <div class="text-lg sm:text-xl font-black">{{ n.name }}</div>
            <div>{{ n.path }}</div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h2 class="text-4xl font-black uppercase">
          Send Us <br />
          A Message
        </h2>
        <div class="w-16 border-2 rounded-lg border-tint mb-6" />
        <form @submit.prevent="submit">
          <input
            required
            placeholder="Full name*"
            class="h-14 w-full border rounded-lg px-4 mb-4"
          />
          <input
            required
            placeholder="Email address*"
            class="h-14 w-full border rounded-lg px-4 mb-4"
          />
          <input
            required
            placeholder="Phone number*"
            class="h-14 w-full border rounded-lg px-4 mb-4"
          />
          <input
            required
            placeholder="Address* (city, state, country)"
            class="h-14 w-full border rounded-lg px-4 mb-4"
          />
          <textarea
            required
            rows="4"
            placeholder="Message here..."
            class="border rounded-lg p-4 mb-4"
          />
          <input
            type="submit"
            value="Send Message"
            class="h-16 px-8 rounded-full text-xl font-bold text-tint bg-black hover:bg-tint hover:text-black transition-all cursor-pointer w-56"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  { name: "Office Address", path: $app.address, icon: "map-location-dot" },
  { name: "Call Us", path: $app.phone, icon: "phone-rotary" },
  { name: "Email Us", path: $app.email, icon: "envelope" },
  { name: "Office Hours", path: $app.hours, icon: "clock" },
];
const body = reactive({
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
});
async function submit() {
  try {
  } catch (error) {}
}
</script>

<style scoped></style>
