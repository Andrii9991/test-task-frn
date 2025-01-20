<template>
  <div>
    <!-- Пошуковий запит -->
    <input
      v-model="searchQuery"
      class="shadow-md mb-3 p-2 rounded-md"
      placeholder="Input value for searching"
      type="text"
    />
    <div
      class="flex flex-col items-center h-[500px] p-4 rounded-lg justify-center bg-white"
      @scroll="handleScroll"
      style="overflow-y: auto"
    >
      <!-- Список продуктів з анімацією -->
      <transition-group name="fade" tag="div">
        <div v-for="product in filteredProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVirtualization } from "../../composable/useVirtualization";
import ProductCard from "../general/ProductCard.vue";

const { filteredProducts, handleScroll, searchQuery } = useVirtualization();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
