<script setup>
import { ref } from "vue";
const sidebarIsOpen = ref(true);
const isBurger = ref(true)
const burger = ref(false)

const onClickCloseSidebar = () => {
  sidebarIsOpen.value = false;
  setTimeout(() => {
    burger.value = true
  }, 300)
};

const onClickOpenSidebar = () => {
  sidebarIsOpen.value = true
  isBurger.value = false
  burger.value = false
}

const mouseBurger = () => {
  const mouse = document.querySelector('.burger')
  const open  = document.querySelector('.open-sidebar')
  mouse.addEventListener('mousemove', () => {
    console.log(open);
    isBurger.value = false
  })
  open.addEventListener('mouseleave', () => {
    isBurger.value = true
  })
}
</script>

<template>
  <!-- sidebar -->
  <div class="sidebar" :class="sidebarIsOpen == false ? 'close' : ''">
    <!-- sidebar top -->
    <div class="sidebar__top">
      <!-- sidebar user -->
      <div class="sidebar__user">
        <span class="sidebar__user-logo">J</span>
        <h3 class="sidebar__user-name">Shuhratov Javohir Saving</h3>
        <img src="@/assets/images/user-info-drop.svg" alt="" />
      </div>
      <!-- sidebar user end -->
      <span @click="onClickCloseSidebar" class="sidebar__top-close">
        <img src="@/assets/images/sidebar-close.svg" alt="" />
      </span>
    </div>
    <!-- sidebar top end -->

    <!-- sidebar menu -->
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
    <!-- sidebar menu end -->
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
  <div v-show="isBurger" @mouseenter="mouseBurger" class="burger" :class="burger == true ? 'active' : ''">
    <span class="burger-item"></span>
    <span class="burger-item"></span>
    <span class="burger-item"></span>
  </div>
  <div @click="onClickOpenSidebar" v-show="isBurger == false" class="open-sidebar">
    <img src="@/assets/images/sidebar-close.svg" alt="">
  </div>
  <!-- sidebar end -->
</template>