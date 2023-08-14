import { defineStore } from "pinia";

export const useSidebarSetingsStore = defineStore("sidebar-settings", {
  state: () => ({
    settings: [
      { id: 1, icon: "search.svg", name: "Search" },
      { id: 2, icon: "update.svg", name: "Update" },
      { id: 3, icon: "setting.svg", name: "Setting & members" },
      { id: 4, icon: "add.svg", name: "New page" },
    ],
  }),
});

export const useSidebarTasksStore = defineStore("sidebar-tasks", {
  state: () => ({
    tasks: [],
    item: "",
    modelAddTask: null,
    openModelAddTask: false,
  }),
  actions: {
    addTask(input,id) {
      let task = {
        id: id,
        icon: "page.svg",
        title: `${input}`,
        subtitle: "",
      };
      this.tasks.push(task);
    },
  },
});
