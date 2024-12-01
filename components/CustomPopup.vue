<template>
    <div class="popup" v-if="show" @click="popupClose">
        <div class="popup_content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { useTasksStore } from "../stores/Store";

export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const store = useTasksStore();

        const popupClose = () => {
            store.popupClose();
        };

        return {
            popupClose,
        };
    },
};
</script>

<style scoped>
.popup {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.popup_content {
    border: 2px solid blue;
    border-radius: 8px;
    background: rgba(200, 150, 100, 1);
    padding: 20px;
    min-width: 200px;
    min-height: 100px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
