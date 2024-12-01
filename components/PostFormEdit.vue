<template>
    <form @submit.prevent class="container form">
        <h2>Task edit</h2>
        <UInput v-model="task.title" type="text" placeholder="Name" v-focus />
        <UInput v-model="task.body" type="text" placeholder="Description" />
        <UInput v-model="task.description" type="text" placeholder="Detail description" />
        <UButton label="Update task" class="button" @click="editTask" />
    </form>
</template>

<script>
import { useTasksStore } from "../stores/Store";

export default {
    setup() {
        const store = useTasksStore();

        const task = store.taskForEdit;

        const editTask = () => {
            store.editTask(task);
        };

        return {
            editTask,
            task
        };
    }
}
</script>

<style></style>