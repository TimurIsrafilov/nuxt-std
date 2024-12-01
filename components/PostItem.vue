<template>
    <div @click.stop="$router.push(`/tasks/${task.id}`)" class="task">
        <div>
            <p><strong>Number: # </strong> {{ task.id }}</p>
            <p><strong>Task: </strong> {{ task.title }}</p>
            <p><strong>Description: </strong> {{ task.body }}</p>
        </div>
        <div class="buttons_container">
            <UButton label="Task delete" color="red" @click.stop="deleteTask(task.id)" />
            <UButton label="Task edit" color="blue" @click.stop="popupEditOpen(task)" />
        </div>
    </div>
</template>

<script>
import { useTasksStore } from "../stores/Store";

export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const store = useTasksStore();

        const deleteTask = () => {
            store.deleteTask(props.task.id);
        };

        const popupEditOpen = () => {
            store.popupEditOpen(props.task);
        };

        return {
            deleteTask,
            popupEditOpen,
            task: props.task
        };
    }
};
</script>

<style scoped>
.task {
    padding: 15px;
    border: 2px solid grey;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    gap: 12px;
    width: 100%;
}

.buttons_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px
}
</style>