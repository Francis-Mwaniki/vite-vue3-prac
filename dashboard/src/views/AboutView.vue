<template>
  <main class="min-h-screen">
    <div
      class="flex justify-center items-center mx-auto p-4 bg-slate-900 flex-row text-white font-mono"
    >
      <h2 class="text-white font-mono font-extrabold">Let Learn Pinia</h2>
      <img src="../assets/pinia.svg" alt="" class="h-16 w-16" />
    </div>
    <nav class="flex justify-start items-center m-2 gap-2">
      <button
        class="px-5 py-2 bg-slate-600 rounded-md ring-white text-white"
        @click="filter = 'all'"
      >
        All tasks
      </button>
      <button
        class="px-5 py-2 bg-slate-600 rounded-md ring-white text-white"
        @click="filter = 'favs'"
      >
        Favorite
      </button>
    </nav>

    <div v-if="filter === 'all'">
      <h6 class="text-center text-white">
        All Tasks ({{ taskStore.countAll }})
      </h6>
      <div
        class="flex justify-center items-center mx-auto max-w-4xl gap-2 mt-7"
      >
        <div class="gap-2" v-for="task in taskStore.task">
          <TaskDts :task="task" />
        </div>
      </div>
    </div>
    <div class="" v-if="filter === 'favs'">
      <h6 class="text-center text-white">
        Fav Tasks( {{ taskStore.countFav }})
      </h6>
      <div
        class="flex justify-center items-center mx-auto max-w-4xl gap-2 mt-7"
      >
        <div class="gap-2" v-for="task in taskStore.fav">
          <TaskDts :task="task" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import TaskDts from "../components/TaskDts.vue";
import { useTaskStore } from "../stores/counter";
const filter = ref("all");
const taskStore = useTaskStore();
</script>
<style></style>
