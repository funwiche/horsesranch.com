<template>
  <div class="p-6">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white sm rounded-lg p-8 shadow-xl"
    >
      <div class="form-group">
        <label>Title</label>
        <div class="textfield">
          <input v-model="form.title" required type="text" />
        </div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <div class="textfield">
          <textarea v-model="form.description" rows="5" required />
        </div>
      </div>
      <div class="form-group">
        <label>Price</label>
        <div class="textfield">
          <input v-model.number="form.price" type="number" required />
        </div>
      </div>

      <div class="form-group">
        <label>Stock</label>
        <div class="textfield">
          <select v-model="form.stock" required>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Stock</label>
        <label>
          <input
            value="In Stock"
            v-model="form.stock"
            type="radio"
            name="stock"
          />
          In Stock
        </label>
        <label>
          <input
            value="Out of Stock"
            v-model="form.stock"
            type="radio"
            name="stock"
          />
          Out of Stock
        </label>
      </div>
      <div class="form-group">
        <label for="available">Available</label>
        <input v-model="form.available" type="checkbox" name="available" />
      </div>

      <div class="form-group">
        <label>Gallery</label>
        <input ref="galleryInput" type="file" multiple />
      </div>
      <button type="submit" class="btn block">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const galleryInput = ref<HTMLInputElement | null>(null);
const form = reactive({
  title: "Used 20ft Shipping Container",
  description:
    "Used Shipping Container - 20' x 9'6\" with Lock Box - Cream Colour\nPrice $1500  including delivery.\nNo leaks\nMild rust on the corners\nNo moulds\nWater proof\nDoor closes smoothy\nFloor intact",
  sku: "NHK0299",
  price: 3400,
  stock: "In Stock",
  available: true,
});

async function handleSubmit() {
  try {
    console.log("Form submitted:", { ...form });
  } catch (error) {
    console.log(error);
  }
}
</script>
