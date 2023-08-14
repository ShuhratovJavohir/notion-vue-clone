<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ModelAddTask from "@/components/ModelAddTask.vue";
import { useSidebarTasksStore } from "@/store/sidebar.js";

// Global State
const sidebarTasksStore = useSidebarTasksStore();

</script>

<template>
  <div class="app">
    <Sidebar />
    <Transition name="module">
      <ModelAddTask v-if="sidebarTasksStore.openModelAddTask" />
    </Transition>
  </div>
</template>
