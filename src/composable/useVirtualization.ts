// src/composable/useVirtualization.ts
import { ref, computed, onMounted, watch } from "vue";
import { getAllProducts } from "../api/mainRequests"; // Використовуємо існуючий API
import type { IProduct } from "../interfaces/product";

export const useVirtualization = () => {
  const products = ref<IProduct[]>([]); // Усі продукти
  const visibleProducts = ref<IProduct[]>([]); // Продукти, які мають бути видимі
  const limit = 20; // Кількість елементів на сторінці
  const offset = ref(0); // Позиція прокрутки
  const searchQuery = ref(""); // Пошуковий запит

  // Отримання всіх продуктів
  const fetchProducts = async () => {
    try {
      const allProducts = await getAllProducts();
      products.value = allProducts;
      updateVisibleProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Оновлення видимих продуктів на основі прокрутки
  const updateVisibleProducts = () => {
    visibleProducts.value = products.value.slice(0, offset.value + limit);
  };

  // Слухач для прокрутки
  const handleScroll = (event: Event) => {
    const list = event.target as HTMLElement;
    const bottom = list.scrollHeight === list.scrollTop + list.clientHeight;
    if (bottom) {
      offset.value += limit;
      updateVisibleProducts();
    }
  };

  // Пошук продуктів
  const filteredProducts = computed(() => {
    return visibleProducts.value.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  // Функція ініціалізації даних
  onMounted(() => {
    fetchProducts();
  });

  watch(searchQuery, () => {
    offset.value = 0; // Скидаємо offset при зміні запиту на пошук
    updateVisibleProducts(); // Оновлюємо видимі продукти
  });

  return {
    visibleProducts,
    handleScroll,
    filteredProducts,
    searchQuery,
  };
};
