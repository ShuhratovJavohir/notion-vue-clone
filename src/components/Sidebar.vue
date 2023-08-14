<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
const isSidebarOpen = ref(true);
const miniSidebar = ref(false);
const isBurger = ref(true);
const activeBurger = ref(false);
const help = ref(false);

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
        <img src="@/assets/images/user-info-drop.svg" alt="" />
      </div>
      <span
        @click="onClickSidebarBtn"
        class="sidebar__top-close"
        v-show="isSidebarOpen == true"
      >
        <img src="@/assets/images/sidebar-close.svg" alt="" />
      </span>
    </div>

    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <img src="@/assets/images/icons/search.svg" alt="search" />
        <span>Search</span>
      </li>
      <li class="sidebar__menu-item">
        <img src="@/assets/images/icons/update.svg" alt="search" />
        <span>Update</span>
      </li>
      <li class="sidebar__menu-item">
        <img src="@/assets/images/icons/setting.svg" alt="search" />
        <span>Setting & members</span>
      </li>
      <li class="sidebar__menu-item">
        <img src="@/assets/images/icons/add.svg" alt="search" />
        <span>New page</span>
      </li>
    </ul>
    <ul class="sidebar__tasks">
      <li class="sidebar__tasks-task">
        <span class="sidebar__tasks-task-drop">
          <img src="@/assets/images/icons/drop.svg" alt="" />
        </span>
        <img src="@/assets/images/icons/page.svg" alt="" />
        <span>page</span>
      </li>
      <li class="sidebar__tasks-task">
        <span class="sidebar__tasks-task-drop">
          <img src="@/assets/images/icons/drop.svg" alt="" />
        </span>
        <img src="@/assets/images/icons/page.svg" alt="" />
        <span>page</span>
      </li>
      <li class="sidebar__tasks-task">
        <span class="sidebar__tasks-task-drop">
          <img src="@/assets/images/icons/drop.svg" alt="" />
        </span>
        <img src="@/assets/images/icons/page.svg" alt="" />
        <span>page</span>
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
    <img src="@/assets/images/sidebar-close.svg" alt="" />
  </div>
  <Transition name="help">
    <div v-show="help == true" class="help">
      <h3>Lock sidebar open</h3>
      <p>ctrl + /</p>
    </div>
  </Transition>
</template>