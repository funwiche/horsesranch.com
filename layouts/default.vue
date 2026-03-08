<template>
  <div class="flex flex-col min-h-screen">
    <div id="top" />
    <v-header />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
    <v-footer />
  </div>
</template>
