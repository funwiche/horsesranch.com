<template>
  <Title>Page Not Found</Title>
  <section class="text-white p-12 center flex-1">
    <div class="sm text-center">
      <div
        class="text-6xl sm:text-[72px] lg:text-[160px] font-thin tracking-widest mb-6"
      >
        4<span class="text-tint">0</span>4
      </div>
      <div class="xs">
        <div class="text-2xl sm:text-3xl font-bold mb-2">
          Oops! Page Not Found
        </div>
        <div class="mb-6 text-sm">
          It looks like this page doesn't exist. Please check the URL or click
          the link below to return to the home page.
        </div>
        <nuxt-link
          to="/"
          class="bg-tint px-8 py-3.5 rounded-full text-xs uppercase font-bold text-black opacity-80 hover:opacity-100"
          >go to home</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
