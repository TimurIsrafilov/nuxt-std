<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CustomPopup v-model:show="store.popupAdd">
      <PostFormAdd />
    </CustomPopup>
    <CustomPopup v-model:show="store.popupEdit">
      <PostFormEdit />
    </CustomPopup>
  </div>
</template>

<script>
import { useTasksStore } from "./stores/Store";

export default {
  setup() {
    const store = useTasksStore();
    return {
      store,
    };
  }

}
</script>

<style></style>