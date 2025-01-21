import { ref, computed, onMounted, watch } from "vue";
import { getAllProducts } from "../api/mainRequests";
import type { IProduct } from "../interfaces/product";

export const useVirtualization = () => {
  const products = ref<IProduct[]>([]);
  const visibleProducts = ref<IProduct[]>([]);
  const limit = 20;
  const offset = ref(0);
  const searchQuery = ref("");

  const fetchProducts = async () => {
    try {
      const allProducts = await getAllProducts();
      products.value = allProducts;
      updateVisibleProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const updateVisibleProducts = () => {
    visibleProducts.value = products.value.slice(0, offset.value + limit);
  };

  const handleScroll = (event: Event) => {
    const list = event.target as HTMLElement;
    const bottom = list.scrollHeight === list.scrollTop + list.clientHeight;
    if (bottom) {
      offset.value += limit;
      updateVisibleProducts();
    }
  };

  const filteredProducts = computed(() => {
    const query = searchQuery.value.toLowerCase().trim();

    if (!query) return visibleProducts.value;

    return products.value.filter(({ title }) =>
      title.toLowerCase().includes(query)
    );
  });

  onMounted(() => {
    fetchProducts();
  });

  watch(searchQuery, () => {
    offset.value = 0;
    updateVisibleProducts();
  });

  return {
    visibleProducts,
    handleScroll,
    filteredProducts,
    searchQuery,
  };
};
