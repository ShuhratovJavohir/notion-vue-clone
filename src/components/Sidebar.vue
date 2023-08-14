<script setup>
import { onMounted, ref, onBeforeUnmount, computed } from "vue";
import { useSidebarSetingsStore, useSidebarTasksStore } from "@/store/sidebar.js";
// lokal state
const isSidebarOpen = ref(true);
const miniSidebar = ref(false);
const isBurger = ref(true);
const activeBurger = ref(false);
const help = ref(false);

// Global state
const sidebarSettingsStore = useSidebarSetingsStore();
const sidebarTasksStore = useSidebarTasksStore()


const getSettings = computed(() => sidebarSettingsStore.settings);
const getTasks = computed(() => sidebarTasksStore.tasks)


// Settings
const onClickSettings = (item) => {
  if(item.name === 'New page'){
    sidebarTasksStore.openModelAddTask = true
  }
}

const onClickTask = (task) => {
  sidebarTasksStore.activeTask(task)
}

// Открытие и закрытие Sidebar
const onClickSidebarBtn = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  if (!isSidebarOpen.value) {
    setTimeout(() => {
      activeBurger.value = true;
    }, 300);
  } else {
    activeBurger.value = false;
  }
};

// Открытие при навидение курором miniSidebar
const mousemoveHandler = (e) => {
  if (!isSidebarOpen.value) {
    if (e.clientX < 80) {
      miniSidebar.value = true;
    }
    if (e.clientX > 360) {
      miniSidebar.value = false;
    }
  }
};

// Изменения btn при навидании
const mouseBurger = () => {
  isBurger.value = !isBurger.value;
  help.value = !help.value;
};

// горячая клавиша
const handleKeyPress = (event) => {
  if (event.ctrlKey && event.key === "/") {
    if (!isSidebarOpen.value) {
      onClickSidebarBtn();
    } else {
      onClickSidebarBtn();
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyPress);
  window.addEventListener("mousemove", mousemoveHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyPress);
  window.removeEventListener("mousemove", mousemoveHandler);
});
</script>

<template>
  <div class="sidebar" :class="{ close: !isSidebarOpen, open: miniSidebar }">
    <div class="sidebar__top">
      <div class="sidebar__user">
        <span class="sidebar__user-logo">J</span>
        <h3 class="sidebar__user-name">Shuhratov Javohir Saving</h3>
        <img src="../../images/user-info-drop.svg" alt="" />
      </div>
      <span
        @click="onClickSidebarBtn"
        class="sidebar__top-close"
        v-show="isSidebarOpen == true"
      >
        <img src="../../images/sidebar-close.svg" alt="" />
      </span>
    </div>

    <ul class="sidebar__menu">
      <li 
        v-for="item in getSettings" 
        :key="item.id" 
        class="sidebar__menu-item" 
        @click="onClickSettings(item)"
      >
        <img :src="'../images/icons/' + item.icon" alt="search" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <ul class="sidebar__tasks">
      <li 
        v-for="taks in getTasks" 
        :key="taks.id" 
        class="sidebar__tasks-task"
        @click="onClickTask(taks)"
      >
        <span class="sidebar__tasks-task-drop">
          <img src="../../images/icons/drop.svg" alt="" />
        </span>
        <img :src="'../../images/icons/' + taks.icon" alt="" />
        <span>{{ taks.title }}</span>
      </li>
    </ul>
  </div>
  <div
    v-show="isBurger == true"
    class="burger"
    :class="activeBurger == true ? 'active' : ''"
    @mouseover="mouseBurger"
  >
    <span class="burger-item"></span>
    <span class="burger-item"></span>
    <span class="burger-item"></span>
  </div>
  <div
    v-show="isBurger == false"
    class="open-sidebar"
    @mouseleave="mouseBurger"
    @click="onClickSidebarBtn"
  >
    <img src="../../images/sidebar-close.svg" alt="" />
  </div>
  <Transition name="help">
    <div v-show="help == true" class="help">
      <h3>Lock sidebar open</h3>
      <p>ctrl + /</p>
    </div>
  </Transition>
</template>