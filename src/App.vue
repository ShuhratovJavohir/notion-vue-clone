<script setup>
import Task from '@/components/Task.vue'
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import ModelAddTask from "@/components/ModelAddTask.vue";
import { useSidebarTasksStore } from "@/store/sidebar.js";

// Global State
const sidebarTasksStore = useSidebarTasksStore();
</script>

<template>
  <div class="app">
    <Sidebar />
    <div class="content">
      <Header />
      <Task/>
    </div>
  </div>
    <Transition name="module">
      <ModelAddTask v-if="sidebarTasksStore.openModelAddTask" />
    </Transition>
</template>
