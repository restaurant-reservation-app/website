import { ref, onMounted } from "vue";
import { fetchDish, Dish, fetchDishRandom } from "@/api/menu";

export function getDishes(category?: string, dishName?: string) {
  const dishes = ref<Dish[]>([]);
  const loading = ref(true);
  const error = ref<unknown>(null);

  onMounted(async () => {
    try {
      const response = await fetchDish({ category, dishName });
      dishes.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  });

  return {
    dishes,
    loading,
    error,
  };
}

export function getDishesRandom(amount?: number) {
  const dishes = ref<Dish[]>([]);
  const loading = ref(true);
  const error = ref<unknown>(null);

  onMounted(async () => {
    try {
      const response = await fetchDishRandom({ amount });
      dishes.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  });

  return {
    dishes,
    loading,
    error,
  };
}
