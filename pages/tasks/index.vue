<template>
    <div class="container">
        <h1>Tasks</h1>
        <UButton label="Task create" @click.stop="popupAddOpen()" />
        <PostList :tasks="store.tasks" />
    </div>
</template>

<script>
import { useTasksStore } from "../../stores/Store"

export default {
    setup() {
        const store = useTasksStore();

        const popupAddOpen = () => {
            store.popupAddOpen();
        }

        return {
            store,
            popupAddOpen
        }
    },
}
</script>

<style></style>