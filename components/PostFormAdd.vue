<template>
    <form @submit.prevent class="container form">
        <h2>Task create</h2>
        <UInput v-model="task.title" type="text" placeholder="Name" v-focus />
        <UInput v-model="task.body" type="text" placeholder="Description" />
        <UInput v-model="task.description" type="text" placeholder="Deteil description" />
        <UButton label="Add task" class="button" @click="createTask" />
    </form>
</template>

<script>
import { useTasksStore } from "../stores/Store";

export default {
    setup() {
        const store = useTasksStore();

        const task = reactive({
            title: "",
            body: "",
            description: "",
        });

        const createTask = () => {
            if (!task.title || !task.body || !task.description) {
                alert("All fields are required!");
                return;
            }

            const newTask = { ...task, id: store.tasks.length + 1 };
            store.createTask(newTask);

            task.title = "";
            task.body = "";
            task.description = "";
        };

        return {
            createTask,
            task
        };
    }
}
</script>

<style></style>
