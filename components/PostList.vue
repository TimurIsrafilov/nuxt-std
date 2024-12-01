<template>
    <div class="container">
        <div class="container" v-if="tasks?.length > 0">
            <h3>Tasks list</h3>
            <PostItem v-for="task in tasks" :key="task.id" :task="task" />
        </div>
        <h3 v-else class="text">Task list is empty</h3>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.text {
    color: red;
}
</style>