<template>
  <div class="textfield">
    <label
      v-if="label"
      class="absolute pointer-events-none flex-start transition-all duration-300 px-[7px] inset-1"
      :class="{
        'h-3 text-xs font-black': dirty,
        'h-10 text-sm font-medium bg-white': !dirty,
        'text-error': error,
      }"
    >
      {{ label }}{{ required ? "*" : "" }}
    </label>
    <input
      ref="input"
      :value="model"
      :required="required"
      :type="type || 'text'"
      @invalid="checkValidity"
      style="display: none"
    />
    <textarea
      v-if="textarea"
      v-model="model"
      ref="textfield"
      @focus="focus = true"
      @blur="focus = false"
      @input="checkValidity"
      :placeholder="placeholder"
      :class="{ focus, error, dirty }"
      rows="4"
    />
    <select
      v-else-if="select"
      v-model="model"
      ref="textfield"
      @focus="focus = true"
      @blur="focus = false"
      @change="checkValidity"
      :placeholder="placeholder"
      :class="{ focus, error, dirty }"
    >
      <option v-for="value in items">{{ value }}</option>
    </select>
    <button
      v-else-if="submit"
      type="submit"
      class="h-14 px-8 rounded-lg text-sm font-bold text-tint bg-black hover:bg-tint hover:text-black transition-all cursor-pointer w-56 center"
    >
      <span
        v-if="loading"
        class="size-6 animate-spin border-4 rounded-full border-t-white border-r-white"
      />
      <span v-else>Send Message</span>
    </button>

    <input
      v-else
      v-model="model"
      ref="textfield"
      :type="type || 'text'"
      @focus="focus = true"
      @blur="focus = false"
      @keydown.enter.prevent
      @input="checkValidity"
      :placeholder="placeholder"
      :class="{ focus, error, dirty }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type?: string;
  label?: string;
  submit?: boolean;
  select?: boolean;
  loading?: boolean;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
  items?: any[];
}>();
const model = defineModel({ default: "" });
const input: any = ref<HTMLInputElement | null>(null);
const textfield = ref<HTMLInputElement | null>(null);

const focus = ref(false);
const error = ref(false);
const dirty = computed(() => (model.value || focus.value ? true : false));
async function checkValidity() {
  await $f.delay(20);
  if (input.value.validity.valid) error.value = false;
  else error.value = true;
}
</script>

<style scoped></style>
