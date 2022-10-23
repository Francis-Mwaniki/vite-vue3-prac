import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  /*   function increment() {
    count.value++
  } */
  const task = ref([
    { id: 1, title: "BUY SOME MILK", isFav: true },
    { id: 2, title: "BUY SOME SWEETS", isFav: false },
    { id: 3, title: "BUY SOME STOCKS", isFav: true },
    { id: 2, title: "BUY SOME SWEETS", isFav: false },
    { id: 3, title: "BUY SOME STOCKS", isFav: true },
  ]);
  const fav = computed(() => task.value.filter((t) => t.isFav));
  const countFav = computed(() =>
    task.value.reduce((p, c) => (c.isFav ? p + 1 : p), 0)
  );
  const countAll = computed(() => task.value.length);
  return { task, fav, countFav, countAll };
});
