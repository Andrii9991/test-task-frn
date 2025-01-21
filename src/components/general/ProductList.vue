<template>
  <div class="w-[550px]">
    <input
      v-model="searchQuery"
      class="shadow-md mb-3 p-2 rounded-md"
      placeholder="Search"
      type="text"
    />
    <div
      class="flex flex-col items-center h-[500px] p-4 rounded-lg justify-start bg-white custom-scrollbar"
      @scroll="handleScroll"
    >
      <transition-group name="fade" tag="div">
        <div v-for="product in filteredProducts" :key="product.title">
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.custom-scrollbar {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #f3f4f6;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #6b7280;
  border-radius: 10px;
  border: 2px solid #f3f4f6;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f3f4f6;
}
</style>
