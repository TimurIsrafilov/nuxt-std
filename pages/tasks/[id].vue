<template>
    <div class="container" v-if="task">
        <h1>Task # {{ task.id }}</h1>
        <h2>Title: {{ task.title }}</h2>
        <h3>Short description: {{ task.body }}</h3>
        <p>Full description: {{ task.description }}</p>
        <UButton label="To all tasks" @click="$router.push('/tasks')" />
    </div>
    <div v-else>
        <p>Task not found. Redirecting...</p>
    </div>
</template>

<script>
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTasksStore } from "../../stores/Store";

export default {
    setup() {
        const store = useTasksStore();
        const route = useRoute();
        const router = useRouter();

        const taskId = computed(() => parseInt(route.params.id, 10));
        const task = computed(() =>
            store.tasks.find((task) => task.id === taskId.value)
        );

        watchEffect(() => {
            if (!task.value) {
                console.error(`Task with ID ${taskId.value} not found`);
                setTimeout(() => router.push("/tasks"), 2000);
            }
        });

        return {
            task,
        };
    },
};
</script>

<style scoped>
.container {
    padding: 15px;
}
</style>
