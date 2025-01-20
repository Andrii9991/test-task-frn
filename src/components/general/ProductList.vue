<template>
  <div class="flex flex-col items-center justify-center p-5 bg-white">
    <div v-for="product in allProducts" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { getAllProducts } from "../../api/mainRequests";
import type { IProduct } from "../../interfaces/product";
import ProductCard from "../general/ProductCard.vue";

const allProducts = ref<IProduct[]>([]);

onMounted(async () => {
  allProducts.value = await getAllProducts();
  allProducts.value;
});
</script>
