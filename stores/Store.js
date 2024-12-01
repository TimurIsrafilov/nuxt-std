import { defineStore } from "pinia";
import defaultTasks from "../utils/constants";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref(defaultTasks);
  const taskForEdit = ref(null);
  const popupAdd = ref(false);
  const popupEdit = ref(false);

  function createTask(task) {
    tasks.value.push(task);
    popupAdd.value = false;
  }

  function deleteTask(taskId) {
    tasks.value = tasks.value.filter((i) => i.id !== taskId);
  }

  function editTask(updatedTask) {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value.splice(index, 1, updatedTask);
    }
    popupEdit.value = false;
  }

  function popupAddOpen() {
    popupAdd.value = true;
  }

  function popupEditOpen(task) {
    popupEdit.value = true;
    taskForEdit.value = task;
  }

  function popupClose() {
    popupAdd.value = false;
    popupEdit.value = false;
  }

  return {
    tasks,
    taskForEdit,
    popupAdd,
    popupEdit,
    createTask,
    deleteTask,
    editTask,
    popupAddOpen,
    popupEditOpen,
    popupClose,
  };
});
