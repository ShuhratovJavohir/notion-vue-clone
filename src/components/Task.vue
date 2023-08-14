<script setup>
import { computed, ref } from 'vue';
import {useSidebarTasksStore} from '@/store/sidebar.js'

let value = ref('')

// Global State
const sidebarTasksStore = useSidebarTasksStore()

const getTask = computed(() => sidebarTasksStore.task)

const autoTextareaHeight = () => {
  const $textarea = document.querySelectorAll("#textarea");
  $textarea.forEach((item) => {
    item.style.height = "auto";
    item.style.height = `${item.scrollHeight}px`;
  });
};
</script>

<template>
  <div class="task" >
    <div class="task-content" v-if="getTask">
			<textarea
      rows="1"
      type="text"
      id="textarea"
      class="task-title"
			v-model="getTask.title"
      @input="autoTextareaHeight"
    ></textarea>
    <ul>
      <li class="task-item">
        <textarea
          rows="1"
          type="text"
          id="textarea"
          @input="autoTextareaHeight"
        ></textarea>
      </li>
    </ul>
		</div>
		<h2 v-else>Заметок пока нету!!!</h2>
  </div>
</template>

