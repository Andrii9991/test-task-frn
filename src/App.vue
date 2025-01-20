<template>
  <div class="flex flex-col items-center">
    <input type="text" />

    <div v-for="product in allProducts" :key="product.id">
      {{ product.title }}
    </div>

    <button class="bg-red-500">Отримати данні</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { getAllProducts } from "./api/mainRequests";
import type { IProduct } from "./interfaces/product";

const allProducts = ref<IProduct[]>([]);

onMounted(async () => {
  allProducts.value = await getAllProducts();
  allProducts.value;
});
</script>

<style scoped></style>
