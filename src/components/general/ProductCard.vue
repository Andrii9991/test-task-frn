<template>
  <div class="flex border rounded-lg p-4 shadow-md gap-4 max-w-[500px] mb-3">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-24 h-24 object-cover rounded"
    />

    <!-- Інформація про продукт -->
    <div class="flex flex-col justify-between flex-1">
      <!-- Назва товару -->
      <h3 class="text-lg font-bold">{{ product.title }}</h3>
      <!-- Опис -->
      <p
        class="text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[350px]"
      >
        {{ product.description }}
      </p>

      <!-- Рядок знижки, бренду та категорії -->
      <div class="flex items-center gap-5 mt-2">
        <p class="text-red-600 font-semibold">Discount %</p>
        <p class="text-teal-600 font-semibold">{{ product.brand }}</p>
        <span
          class="bg-green-600 text-white text-xs py-1 px-2 rounded-full uppercase"
        >
          {{ product.category }}
        </span>
      </div>

      <!-- Рядок ціни та рейтингу -->
      <div class="flex items-center justify-between mt-2">
        <p class="text-lg font-bold text-green-700">${{ product.price }}</p>
        <div class="flex items-center">
          <span class="text-yellow-500 text-lg">★</span>
          <p class="ml-1 text-sm font-semibold">{{ product.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "../../interfaces/product";

defineProps<{ product: IProduct }>();
</script>
