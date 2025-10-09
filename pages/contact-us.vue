<template>
  <v-breadcrums
    title="Contact Us"
    desc="Let’s find the perfect horse for you."
  />
  <section class="bg-white">
    <div class="sm md:lg md:flex gap-10 p-6 sm:p-12">
      <div class="md:w-1/3 pb-10">
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
      <div class="md:w-2/3">
        <h2 class="text-4xl font-black uppercase">
          Send Us <br />
          Inquiries
        </h2>
        <div class="w-16 border-2 rounded-lg border-tint mb-6" />
        <form @submit.prevent="submit">
          <div class="grid sm:grid-cols-2 gap-x-4">
            <v-input required label="Last Name" v-model="body.lname" />
            <v-input required label="First Name" v-model="body.fname" />
          </div>
          <div class="grid sm:grid-cols-2 gap-x-4">
            <v-input required label="City" v-model="body.city" />
            <div class="grid grid-cols-3 gap-x-4">
              <v-input
                required
                label="State"
                v-model="body.state"
                class="col-span-2"
              />
              <v-input label="Zip Code" v-model="body.zip" />
            </div>
          </div>
          <v-input
            select
            required
            label="Country"
            v-model="body.country"
            :items="countries"
          />
          <v-input
            required
            type="email"
            v-model="body.email"
            label="Email Address"
          />
          <v-input
            required
            type="tel"
            v-model="body.phone"
            label="Phone Number"
          />
          <v-input required v-model="body.horse" label="Horse's Name" />
          <v-input
            textarea
            required
            v-model="body.message"
            label="Message"
            placeholder="Message here..."
          />
          <Alert v-model="error" />
          <Alert v-model="success" success />
          <v-input submit :loading="loading" />
        </form>
      </div>
    </div>
  </section>
  <iframe
    class="h-96 w-full bg-base"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228870.897764868!2d-98.39857384944725!3d26.323009338237313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a41d2289547f%3A0x1cef0cac7314d858!2sMcAllen%2C%20TX%2078504%2C%20USA!5e0!3m2!1sen!2suk!4v1760049210237!5m2!1sen!2suk"
    style="border: 0"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
</template>

<script setup lang="ts">
import countries from "@/resources/countries.json";
const links = [
  { name: "Office Address", path: $app.address, icon: "map-location-dot" },
  { name: "Call Us", path: $app.phone, icon: "phone-rotary" },
  { name: "Email Us", path: $app.email, icon: "envelope" },
  { name: "Office Hours", path: $app.hours, icon: "clock" },
];
const loading = ref(false);
const success = ref("");
const error = ref("");
const body = reactive({
  lname: "",
  fname: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  email: "",
  phone: "",
  horse: "",
  message: "",
});
async function submit() {
  try {
    loading.value = true;
    const html = `<!DOCTYPE html><html lang=en><meta charset=UTF-8><meta name=viewport content="width=device-width,initial-scale=1"><title>Email</title><style>div{font-size:14px;margin-bottom:8px}</style><body><div><b>Full name:</b> ${body.lname} ${body.fname}</div><div><b>Email Address: </b>${body.email}</div><div><b>Phone Number:</b> ${body.phone}</div><div><b>Address:</b> ${body.city}, ${body.state} ${body.zip}, ${body.country}</div><div><b>Horse's Name:</b> ${body.horse}</div><div><b>Message: </b>${body.message}</div>`;
    const name = `${body.lname} ${body.fname}`;
    await $fetch($app.api, {
      method: "POST",
      body: { html, to: $app.email, name, ...body },
    });
    body.lname = "";
    body.fname = "";
    body.city = "";
    body.state = "";
    body.zip = "";
    body.country = "";
    body.email = "";
    body.phone = "";
    body.horse = "";
    body.message = "";
    success.value = "Your message has been sent successfully!";
  } catch (err) {
    error.value = "An error occurred. Please try again later!";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
