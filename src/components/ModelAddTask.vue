<script setup>
import { ref } from "vue";
import { useSidebarTasksStore } from "@/store/sidebar.js";
import { v4 as uuidv4 } from "uuid";
// Global State
const sidebarTasksStore = useSidebarTasksStore();

// lokal State
const input = ref("");

const onClickAdd = (title) => {
	const id = uuidv4();
  sidebarTasksStore.addTask(title, id);
  sidebarTasksStore.openModelAddTask = false;
  input.value = "";
};
</script>

<template>
  <div class="modelAddTask" @click="sidebarTasksStore.openModelAddTask = false">
    <div class="modelAddTask__content" @click.stop>
      <input autofocus v-model="input" type="text" placeholder="Untitled" />
      <button @keydown.enter="onClickAdd(input)" @click="onClickAdd(input)">
        Add Task
      </button>
    </div>
  </div>
</template>