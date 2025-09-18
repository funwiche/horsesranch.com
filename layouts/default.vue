<template>
  <div
    id="top"
    class="flex flex-col min-h-screen bg-[url('/bg.jpg')] bg-cover bg-fixed"
  >
    <v-header />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
    <v-footer />
  </div>
</template>
